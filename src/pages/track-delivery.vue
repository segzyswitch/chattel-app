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
          <div class="contain" style="background-color:#FFFFFF;min-height:calc(100vh - 200px);">
            <!-- CHAT PANEL -->
            <img src="../../public/assets/images/logistics/track-img.jpg" class="w-100 mb-3" alt="">

            <div class="row mb-3">
              <div class="col-sm-6">
                <h6 class="text-primary mb-4">Delivery Information</h6>

                <h6>Goods</h6>
                <p class="mb-4">A big bag of shoes and clothes</p>

                <h6>Delivery Address</h6>
                <p>24A Balogun Street ebute metta west lagos</p>
              </div>
              <div class="col-sm-2"></div>
              <div class="col-sm-4">
                <button class="btn btn-block btn-primary">Delivered</button>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">                
                <div class="alert alert-warning mb-5">
                  <h6>NB</h6>
                  <p class="mb-0">Please click the delivered button when your good arrive</p>
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
  background-color: #FFFFFF;
}
.card-form .form-control {
  border: none;
  box-shadow: none;
}
</style>