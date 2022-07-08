<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9" style="background-color:#FAFAFA;min-height:calc(100vh - 200px);">
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
          <div class="contain d-flex">            
            <div class="w-100">
              <div class="d-block chat-head p-3 mb-3">
                <h6 class="pt-2 text-primary">Wallet Balance</h6>
                <div class="btn btn-sm bg-white">NGN 300,000</div>
              </div>
              <form method="GET" @submit.prevent="withdrawFunds" class="col-sm-7 card-form mb-5">
                <div class="form-group mb-4">
                  <label for="amount">Amount</label>
                  <input type="text" id="amount" class="form-control">
                </div>
                <div class="form-group mb-4">
                  <label for="bankname">Bank Name</label>
                  <input type="text" id="bankname" class="form-control">
                </div>
                <div class="form-group mb-4">
                  <label for="accountname">Account Name</label>
                  <input type="text" id="accountname" class="form-control">
                </div>
                <div class="form-group mb-4">
                  <label for="accountnumber">Account Number</label>
                  <input type="text" id="accountnumber" class="form-control">
                </div>
                <div class="form-group mb-4">
                  <label for="password">Password</label>
                  <input type="text" id="password" class="form-control">
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block">Withdraw</button>
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
export default {
  data() {
    return {

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