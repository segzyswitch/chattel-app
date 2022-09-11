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
          <div class="contain d-flex" style="background-color:#FAFAFA;min-height:calc(100vh - 200px);">
          
            <div class="w-100" v-if="!paymentSuccess">
              <div class="d-block chat-head p-3 mb-3">
                <h5 class="pt-2 m-0 text-primary">Wallet Balance</h5>
              </div>
              <form method="GET" @submit.prevent="paymentSuccess=true" class="col-sm-7 card-form">
                <div class="form-group">
                  <div class="form-control"><b>N200</b></div>
                </div>
                <div class="form-group">
                  <label for="amount">Enter amount</label>
                  <input type="text" id="amount" class="form-control">
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block">Pay</button>
                </div>
              </form>
            </div>
            
            <div class="w-100 text-center m-auto" v-if="paymentSuccess">
              <div class="col-sm-5 clearfix m-auto">
                <img src="assets/images/logistics/cargo.jpg" class="img-fluid" alt="">
                <h6 class="mb-5">Your goods are on their way</h6>
                <router-link :to="{name: 'trackDelivery', params: {logistic_profile_code: companyId}}" class="btn btn-primary btn-block">Track Delivery</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageSidebar from '../components/sidebar.vue'
export default {
  data() {
    return {
      paymentSuccess: false,
      companyId: this.$route.params.logistic_profile_code
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
.card-form .form-control {
  border: none;
  box-shadow: none;
}
</style>