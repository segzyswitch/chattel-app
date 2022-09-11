import { reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'


export const globals = reactive({
  Token: sessionStorage.getItem('Token'),
  ProfileCode: sessionStorage.getItem('ProfileCode'),
  pageLoader: false,
  userDetails: {},
  
  async getUser() {
    this.pageLoader = true;
    await axios({
      url: '/logistic_user_auth/logistic_profile?profile_code='+this.ProfileCode,
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
        //Swal.fire("hello")
      }else {
        Swal.fire({
          title: 'Error!',
          text: "An error occured!",
          type: 'warning',
          showCancelButton: true,
          allowOutsideClick: false,
          confirmButtonText: 'Reload',
          cancelButtonText: 'Logout',
          showCloseButton: false,
          showLoaderOnConfirm: true
        })
        .then((result) => {
          if(result.value) {
            //Reload the page
            this.getUser();
          } else {
            //Swal('Logout', 'You will be looged out', 'info')
            sessionStorage.removeItem("Token")
            window.location.replace("/sign-in")
          }
        })
      }
    })
    .catch( err => {
      this.pageLoader = 'timeout'
      console.log(err)
      Swal.fire({
        title: 'Error!',
        text: "An error occured!",
        type: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: 'Reload',
        cancelButtonText: 'Logout',
        showCloseButton: false,
        showLoaderOnConfirm: true
      })
      .then((result) => {
        if(result.value) {
          //Reload the page
          this.getUser();
        } else {
          //Swal('Logout', 'You will be looged out', 'info')
          sessionStorage.removeItem("Token")
          window.location.replace("/sign-in")
        }
      })
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