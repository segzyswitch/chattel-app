<template>
  <title>Agreement requests | Chattel</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9 bg-light" style="min-height:100vh;">
        <nav class="row top-nav sticky-top">
          <div class="contain">
            <div class="float-left pt-2 pb-2 text-primary">
              <h5 class="pt-3">{{ globals.userDetails.business_name }}</h5>
            </div>
            <div class="float-right p-2">
              <router-link to="/my-notification" class="d-block pt-3 pb-3 text-primary"><i class="fa fa-bell"></i></router-link>
            </div>
          </div>
        </nav>

        <div class="row mb-4">
          <h6 class="contain pt-4">
            <a href="#" @click.prevent="this.$router.go(-1)" class="d-block float-left text-primary">
              <i class="fa fa-arrow-left"></i>
            </a>
            <span class="float-left ml-3">Agreement form</span>
          </h6>
        </div>

        <div class="row">
          <div class="contain">
            <div class="row">
              <div class="col-sm-12">
                <div class="w-100 bg-white p-3" v-if="!agreements">
                  <div class="bg-secondary p-3 col-sm-6 mb-2 d-block fake"></div>
                  <div class="bg-secondary p-3 col-sm-6 mb-2 d-block fake" style="animation-delay:0.2s;"></div>
                  <div class="bg-secondary p-3 col-sm-6 mb-2 d-block fake" style="animation-delay:0.4s;"></div>
                </div>
                <div class="w-100 bg-white p-3" v-if="agreements">
                  <router-link v-for="item in agreements" :key="item.id"
                  :to="{name:'showAgreement', params:{agreement_key:item.agreement_key}}"
                    class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Agreement form recieved</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageSidebar from '../components/company-sidebar.vue'
import { globals } from '../globals'
import axios from 'axios'
export default {
  data() {
    return {
      globals,
      agreements: null,
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
        this.agreements = response.data.agreement_list
        console.log(response.data)
      })
      .catch( err => {
        console.log(err)
      })
    }
  },
  components: {
    pageSidebar
  },
  mounted() {
    this.globals.getUser;
    this.fetchAgreement();
  }
}
</script>
<style scoped>
.well-sm {
  font-size: small;
}
</style>