<template>
  <title>Chattel | Dashboard</title>
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
              <div class="col-sm-12 mb-5">
                <div class="w-100 bg-secondary p-3" v-if="!Logistic">
                  <p><span class="bg-dark btn w-25"></span></p>
                  <p><span class="bg-dark btn w-25"></span></p>
                  <p><span class="bg-dark btn w-25"></span></p>
                  <p><span class="bg-dark btn w-25"></span></p>
                  <div class="w-100">
                    <span class="btn p-3 btn-dark pr-5 pl-5"></span>
                    <span class="btn p-3 border border-dark text-danger ml-3 pr-5 pl-5"></span>
                  </div>
                </div>
                <div class="w-100 bg-white p-3 pb-4" v-if="Logistic">
                  <p>Customer Name : Kayode Bamidele</p>
                  <p>Amount : NGN {{Logistic.amount}}</p>
                  <p>Description Of Goods : {{Logistic.description}}</p>
                  <p>Location : {{Logistic.address}}</p>
                  <p
                    style="text-transform:capitalize;"
                    v-if="Logistic.status=='approved'">Status : <span class="text-success">{{Logistic.status}}</span></p>
                  <p
                    v-if="Logistic.status=='decline'"
                    style="text-transform:capitalize;">Status : <span class="text-danger">{{Logistic.status}}</span></p>

                  <div class="w-100" v-if="Logistic.status=='Pending'">
                    <button v-if="!loadBtn"
                      @click="acceptAgeement()"
                      class="btn btn-primary pr-5 pl-5">Accept</button>
                    <button class="btn btn-primary ml-3 pr-5 pl-5" disabled v-if="loadBtn">
                      <i class="fa fa-spin fa-spinner"></i> Loading..
                    </button>
                    <button v-if="!loadBtn"
                      @click="declineAgreement()"
                      class="btn btn-outline bg-white text-danger ml-3 pr-5 pl-5">Decline</button>
                  </div>
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
import axios from 'axios';
import pageSidebar from '../components/company-sidebar.vue';
import { globals } from '../globals';
export default {
  data() {
    return {
      globals,
      Logistic: null,
      agreement_key: this.$route.params.agreement_key,
      loadBtn: false
    }
  },
  methods: {
    async fetchLogistic() {
      await axios("logistic_user_auth/single_agreement_details", {
        method: "POST",
        data: {
          logistic_profile_code: this.globals.ProfileCode,
          agreement_key: this.agreement_key
        },
        headers: {
          'Authorization': 'Bearer ' + this.globals.Token
        }
      })
      .then ( response => {
        this.Logistic = response.data.agreement_list
        //console.log(this.Logistic);
      })
      .catch( err => {
        this.loadResponse = "Failed, "+err.message;
        console.log("catched error "+err.message);
      })
    },
    async acceptAgeement() {
      this.loadBtn = true;
      await axios("logistic_user_auth/approved_agreement", {
        method: "POST",
        data: {
          user_profile_code: this.Logistic.user_profile_code,
          logistic_profile_code: this.globals.ProfileCode,
          agreement_key: this.agreement_key,
        },
        headers: {
          'Authorization': 'Bearer ' + this.globals.Token
        }
      })
      .then ( response => {
        this.fetchLogistic();
        //console.log(response.data);
        this.loadBtn = false;
        this.$swal.fire({
          icon: 'success',
          type: 'success',
          title: 'CHATTEL',
          text: response.data.message
        });
      })
      .catch( err => {
        console.log(err.message);
        this.loadBtn = false;
      })
    },
    async declineAgreement() {
      this.loadBtn = true;
      await axios("logistic_user_auth/decline_agreement", {
        method: "POST",
        data: {
          user_profile_code: this.Logistic.user_profile_code,
          logistic_profile_code: this.globals.ProfileCode,
          agreement_key: this.agreement_key,
        },
        headers: {
          'Authorization': 'Bearer ' + this.globals.Token
        }
      })
      .then ( response => {
        this.fetchLogistic();
        this.loadBtn = false;
        //console.log(response.data);
        this.$swal.fire({
          icon: 'success',
          type: 'success',
          title: 'CHATTEL',
          text: response.data.message
        });
      })
      .catch( err => {
        this.loadBtn = false;
        console.log(err.message);
      })
    }
  },
  components: {
    pageSidebar
  },
  mounted() {
    this.globals.getUser();
    this.fetchLogistic();
  }
}
</script>
<style scoped>
.btn-outline {
  border: 1px solid #000068;
}
</style>