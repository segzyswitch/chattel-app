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
              <div class="col-sm-12">
                <div class="w-100 bg-white p-3">
                  <p>Customer Name : Kayode Bamidele</p>
                  <p>Amount : NGN 50,000</p>
                  <p>Description Of Goods : A bag of clothes and shoes</p>
                  <p>Location : Ibadan, Oyo State</p>

                  <div class="w-100">
                    <button class="btn btn-primary pr-5 pl-5">Accept</button>
                    <button class="btn btn-outline bg-white text-danger ml-3 pr-5 pl-5">Decline</button>
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
import pageSidebar from '../components/company-sidebar.vue'
import { globals } from '../globals'
export default {
  data() {
    return {
      globals
    }
  },
  components: {
    pageSidebar
  },
  mounted() {
    this.globals.getUser();
  }
}
</script>
<style scoped>
.btn-outline {
  border: 1px solid #000068;
}
</style>