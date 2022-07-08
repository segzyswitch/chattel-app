<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9">
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
        <div class="row pt-5 bg-light">
          <div class="contain">
            <div class="row">
              <div class="col-sm-8 mb-5">
                <div class="w-100 bg-white p-3 round-15 mb-3">
                  <img src="assets/images/logistics/copper-eagle.png" class="w-100 img-fluid" alt="Copper Eagle logistics">
                </div>

                <div class="w-100 bg-white p-3 round-15 well-sm">
                  <p>Name : Copper Eagle</p>
                  <p>Address : 21, Omorinre johnson street lekki phase 1</p>
                  <p>Email : CopperEagle@gmail.com</p>
                  <p>Phone :081202280220</p>
                </div>
              </div>
              <div class="col-sm-4 mb-5">
                <!-- UNREAD MESSAGES -->
                <div class="w-100 bg-white p-3 round-15 mb-3">
                  <h6 class="text-primary mb-3">Unread Messages</h6>

                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                  <router-link to="/company-message" class="btn btn-block btn-sm btn-primary">View All</router-link>
                </div>

                <!-- AGREEMENT -->
                <div class="w-100 bg-white p-3 round-15 mb-3">
                  <h6 class="text-primary mb-3" style="overflow:auto;">
                    <span class="float-left pt-1">Agreement Form</span>
                    <router-link to="/company-agreement" class="btn btn-sm float-right">View All</router-link>
                  </h6>

                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                </div>

                <!-- NOTIFICATION -->
                <div class="w-100 bg-white p-3 round-15 mb-3">
                  <h6 class="text-primary mb-3" style="overflow:auto;">
                    <span class="float-left pt-1">Notification</span>
                    <router-link to="/my-notification" class="btn btn-sm float-right">View All</router-link>
                  </h6>

                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
                  <div class="w-100 bg-light p-2 well-sm mb-2">Shola dropped a message for you.</div>
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