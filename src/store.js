import { reactive } from 'vue'
import axios from 'axios'


export const store = reactive({
  
  async getLikes(needle) {
    let showLikes = 0;
    await axios({
      method: "GET",
      url: "/user_auth/view_likes?logistic_profile_code="+needle,
      headers: {
        'Authorization': 'Bearer ' + this.Token
      }
    })
    .then ( (response) => {
      //if ( response.data.status == 'success' ) {
        console.log(response.data.likes_count)
        //showLikes = response.data.likes_count
        showLikes = response.data
    //return 2
      //}
    })
    .catch ( err => {
      console.log(err.message)
    })
    return showLikes
  }  
});