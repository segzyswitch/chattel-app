<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9">
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
        <div class="row pt-5 bg-light">
          <div class="contain">
            <div class="row">
              <div class="col-sm-8 mb-5">
                <div class="init-img d-flex m-auto bg-primary text-white">
                  <div class="w-100 m-auto text-center">
                    <h1 v-if="globals.userDetails.business_name">
                      {{ globals.userDetails.business_name.substr(0,2) }}
                    </h1>
                  </div>
                </div>

                <div class="w-100 bg-white p-3 round-15 well-sm">
                  <p>Name : {{ globals.userDetails.business_name }}</p>
                  <p>Address : {{ globals.userDetails.business_address }}</p>
                  <p>Email : {{ globals.userDetails.email }}</p>
                  <p>Phone : {{ globals.userDetails.phone_no }}</p>
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
                <CompanyAgreement />

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
import CompanyAgreement from '../components/company-agreement.vue'
import { globals } from '../globals'
export default {
  data() {
    return {
      globals
    }
  },
  components: {
    pageSidebar,
    CompanyAgreement
  },
  mounted() {
    this.globals.getUser();
  }
}
</script>
<style scoped>
.init-img {
  width: 9em;
  height: 9em;
  border-radius: 50%;
  margin-bottom: 30px!important;
  box-shadow: 0 0 10px #777;
}
.well-sm {
  font-size: small;
}
</style>