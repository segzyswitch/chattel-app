<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9">
        <nav class="row top-nav mb-3 sticky-top">
          <div class="contain">
            <div class="float-left pt-2 pb-2">
              <a href="#" @click.prevent="this.$router.go(-1)" class="d-block pt-3 pb-3 text-primary"><i class="fa fa-arrow-left"></i></a>
            </div>
            <div class="float-right pt-2 pb-2">
        <router-link to="/notification" class="d-block pt-3 pb-3 text-primary"><i class="fa fa-bell"></i></router-link>
            </div>
          </div>
        </nav>
        <div class="row">
          <div class="contain" style="background-color:#FAFAFA;min-height:calc(100vh - 200px);">
            <!-- CHAT PANEL -->
            <div class="chat-panel">
              <div class="d-block chat-head p-3 mb-3">
                <h6 class="pt-2 m-0 text-primary">Agreement form</h6>
              </div>
              <form method="POST" @submit.prevent="agreementForm()" class="col-sm-7 agreement-form">
                <div class="form-group">
                  <label for="amount">Amount</label>
                  <input type="number" id="amount" v-model="amount" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="size">Size <small>(kg)</small></label>
                  <input type="text" id="size" v-model="size" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <input type="text" id="description" v-model="description" class="form-control" required>
                </div>
                <div class="form-group mb-4">
                  <label for="location">Address</label>
                  <input type="address" id="location" v-model="address" class="form-control" required>
                </div>
                <div class="form-group">
                  <div class="alert alert-success" v-if="agreementOk">{{ agreementOk }}</div>
                  <div class="alert alert-danger" v-if="agreementErr">{{ agreementErr }}</div>
                </div>
                <div class="form-group mb-3">
                  <!-- <router-link to="/payment-method" class="btn btn-primary btn-block">Submit</router-link> -->
                  <button v-if="!loadBtn" type="submit" class="btn btn-primary btn-block">Submit</button>
                  <button disabled v-if="loadBtn" type="button" class="btn btn-primary btn-block"><i class="fa fa-spinner fa-spin"></i> Loading...</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageSidebar from '../components/sidebar.vue'
import { store } from '../store'
import axios from 'axios'
export default {
  data() {
    return {
      amount: null,
      size: null,
      description: null,
      address: null,
      store,
      companyId: this.$route.params.logistic_profile_code,
      loadBtn: false,
      formdataOk: false,
      Token: sessionStorage.getItem("Token"),
      agreementOk: null,
      agreementErr: null
    }
  },
  methods: {
    async agreementForm() {
      this.loadBtn = true;
      this.agreementErr = null;
      this.agreementOk = null;
      let fd = new FormData();
      fd.append('user_profile_code', this.store.userDetails.profile_code)
      fd.append('logistic_profile_code', this.companyId)
      fd.append('amount', this.amount)
      fd.append('address', this.address)
      fd.append('description', this.description)
      fd.append('size', this.size)

      await axios({
        url: "/user_auth/agreement_form",
        method: "POST",
        data: fd,
        headers: {
          'Authorization': 'Bearer ' + this.Token
        }
      })
      .then( response => {
        console.log(response.data);
        if ( response.data.status == 'success' ) {
          this.agreementOk = response.data.message;
          this.agreementErr = null;
          this.amount = null;
          this.size = null;
          this.description = null;
          this.address = null;
          //this.$router.push({name:'paymentMethod', params:{logistic_profile_code: this.companyId}})
        }else {
          this.agreementErr = response.data.message
          this.agreementOk = null
        }
        this.loadBtn = false
      })
      .catch( err => {
        this.agreementErr = err.message
        this.agreementOk = null
        this.loadBtn = false
      })
    }
  },
  components: {
    pageSidebar
  }
}
</script>
<style scoped>
.chat-head {
  background-color: #FAFAFA;
}
.agreement-form input {
  border: none;
  box-shadow: none;
}
</style>