<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9 bg-light" style="min-height:100vh;">
        <nav class="row top-nav sticky-top">
          <div class="contain">
            <div class="float-left pt-2 pb-2 text-primary">
              <h5 class="pt-3">CopperEagle Logistics</h5>
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
                <div class="w-100 bg-white p-3">
                  <router-link to="/show-agreement" class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Kayode Bamidele Filled Agreement Form</span>
                  </router-link>
                  <router-link to="/show-agreement" class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Kayode Bamidele Filled Agreement Form</span>
                  </router-link>
                  <router-link to="/show-agreement" class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Kayode Bamidele Filled Agreement Form</span>
                  </router-link>
                  <router-link to="/show-agreement" class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Kayode Bamidele Filled Agreement Form</span>
                  </router-link>
                  <router-link to="/show-agreement" class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Kayode Bamidele Filled Agreement Form</span>
                  </router-link>
                  <router-link to="/show-agreement" class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Kayode Bamidele Filled Agreement Form</span>
                  </router-link>
                  <router-link to="/show-agreement" class="bg-light p-2 col-sm-6 mb-2 d-block text-dark">
                    <i class="fa fa-book float-left d-block p-1"></i>
                    <span class="f-block flaot-left pl-2">Kayode Bamidele Filled Agreement Form</span>
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
.well-sm {
  font-size: small;
}
</style>