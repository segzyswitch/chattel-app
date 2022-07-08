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
              <form method="GET" action="/payment-method" class="col-sm-7 agreement-form">
                <div class="form-group">
                  <label for="amount">Amount</label>
                  <input type="text" id="amount" class="form-control">
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <input type="text" id="description" class="form-control">
                </div>
                <div class="form-group mb-4">
                  <label for="location">Location</label>
                  <input type="text" id="location" class="form-control">
                </div>
                <div class="form-group mb-3">
                  <router-link to="/payment-method" class="btn btn-primary btn-block">Submit</router-link>
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
.agreement-form input {
  border: none;
  box-shadow: none;
}
</style>