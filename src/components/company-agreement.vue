<template>
  
  <div class="w-100 bg-white p-3 round-15 mb-3">
    <h6 class="text-primary mb-3" style="overflow:auto;">
      <span class="float-left pt-1">Agreement Form</span>
      <router-link to="/company-agreement" class="btn btn-sm float-right">View All</router-link>
    </h6>

    <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
    <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
    <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { globals } from '../globals'
  export default {
    data() {
      return {
        agreements: null,
        globals,
        Token: sessionStorage.getItem('Token'),
        ProfileCode: sessionStorage.getItem('ProfileCode'),
      }
    },
    methods: {
      async fetchAgreement() {
        await axios({
          url: '/logistic_user_auth/agreement_lists?logistic_profile_code='+this.profileCode,
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + this.Token
          }
        })
        .then( response => {
          console.log(response.data)
        })
        .catch( err => {
          console.log(err)
        })
      }
    },
    beforeMount() {
      this.globals.getUser();
      this.fetchAgreement();
    }
  }
</script>

<style scoped>
.well-sm {
  font-size: small;
}
</style>