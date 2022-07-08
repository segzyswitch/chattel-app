<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9" style="background-color:#FAFAFA;">
        <topNav />
        <div class="row">
          <div class="contain">
            <div class="row mb-3 mt-3">
              <div class="col-sm-12">
                <h6 class="mb-4">Notification</h6>
              </div>
            </div>

            <div class="row mb-5">
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <span>Your order is on its way to the drop point</span>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <span>Your order is on its way to the drop point</span>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <span>Your order is on its way to the drop point</span>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <span>Your order is on its way to the drop point</span>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
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
import pageSidebar from '../components/sidebar.vue'
import topNav from '../components/top-nav.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    pageSidebar,
    topNav
  }
}
</script>
<style scoped>
.alert-warning {
  margin-bottom: 30px!important;
}
</style>