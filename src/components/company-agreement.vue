<template>
  
  <div class="w-100 bg-white p-3 round-15 mb-3">
    <h6 class="text-primary mb-3" style="overflow:auto;">
      <span class="float-left pt-1">Agreement Form</span>
      <router-link to="/company-agreement" class="btn btn-sm float-right">View All</router-link>
    </h6>

    <div v-if="!agreements" class="w-100 bg-secondary p-3 well-sm mb-2"></div>
    <div v-if="!agreements" class="w-100 bg-secondary p-3 well-sm mb-2"></div>
    <div v-if="!agreements" class="w-100 bg-secondary p-3 well-sm mb-2"></div>
    <div v-for="item in agreements" :key="item.id" class="w-100 bg-light p-2 well-sm mb-2">Agreement form recieved</div>
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
          url: '/logistic_user_auth/agreement_lists?logistic_profile_code='+this.ProfileCode,
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + this.Token
          }
        })
        .then( response => {
          this.agreements = response.data.agreement_list.slice(0,3)
        })
        .catch( err => {
          console.log(err)
        })
      }
    },
    mounted() {
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