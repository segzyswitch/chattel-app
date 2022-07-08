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
                <h6 class="pt-2 m-0 text-primary">Payment Method</h6>
              </div>
              <div class="col-sm-7">
                <div class="form-group">
                  <router-link to="/paywithcard" class="btn bg-white btn-block text-left text-secondary">Pay with card</router-link>
                </div>
                <div class="form-group">
                  <router-link to="/" class="btn bg-white btn-block text-left text-secondary">Pay with wallet</router-link>
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
</style>