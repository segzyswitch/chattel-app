<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">

    <!-- PAGE LOADER -->
    <div class="page-loader d-flex text-center bg-white" v-if="pageLoader">
      <div class="w-100 m-auto text-primary display-4">
        <i class="fa fa-spinner fa-spin"></i>
      </div>
    </div>

    <div class="row">
      <pageSidebar />

      <div class="col-sm-9">
        <nav class="row top-nav sticky-top">
          <div class="contain">
            <div class="float-left pt-2 pb-2 text-primary">
              <h5>Hi {{store.userDetails.surname}}</h5>
              <p class="m-0">Available logistics company</p>
            </div>
            <div class="float-right p-2">
              <router-link to="/notification" class="d-block pt-3 pb-3 text-primary"><i class="fa fa-bell"></i></router-link>
            </div>
          </div>
        </nav>

        <homeLogistics />
      </div>
    </div>
  </div>
</template>

<script>
import {store} from '../store';
import pageSidebar from '../components/sidebar.vue';
import homeLogistics from '../components/home-logistics.vue';
export default {
  name: "Dashboard",
  data() {
    return {
      store
    }
  },
  components: {
    pageSidebar,
    homeLogistics
  },
  mounted() {
    store.getUser()
  }
}
</script>