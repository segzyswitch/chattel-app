import { reactive } from 'vue'
import axios from 'axios'
//import Swal from 'sweetalert2'


export const store = reactive({
  Token: sessionStorage.getItem('Token'),
  ProfileCode: sessionStorage.getItem('ProfileCode'),
  pageLoader: false,
  userDetails: {},
  
  async getUser() {
    this.pageLoader = true;
    await axios({
      url: 'user_auth/user?profile_code='+this.ProfileCode,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.Token
      }
    })
    .then( response => {
      if ( response.data ) {
        this.userDetails = response.data;
        this.pageLoader = false;
        //console.log(response.data)
      }
    })
    .catch( err => {
      this.pageLoader = 'timeout'
      console.log(err)
    })
  },

  toFullDate(needle) {
    var date = new Date(needle),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hrs = ("0" + date.getHours()).slice(-2),
      mins = ("0" + date.getMinutes()).slice(-2);
    var fulldate = day+"/"+mnth+"/"+date.getFullYear();
    var fulltime = [hrs, mins].join(':');
    return fulldate+" "+fulltime
  }
});