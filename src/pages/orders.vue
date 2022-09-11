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
                <div class="btn btn-sm bg-white">NGN {{ store.userDetails.balance+'.00' }}</div>
              </div>
              <table class="table">
                <thead class="bg-primary text-white">
                  <tr>
                    <th>Logistics Company</th>
                    <th>Order Date</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span>Derron Group</span></td>
                    <td><span>22/03/2022</span></td>
                    <td><span> <span class="btn-sm btn-success pr-4 pl-4">Delivered</span> </span></td>
                  </tr>
                  <tr>
                    <td><span>Derron Group</span></td>
                    <td><span>22/03/2022</span></td>
                    <td><span> <span class="btn-sm btn-warning text-light pr-4 pl-4">In Progress</span> </span></td>
                  </tr>
                  <tr>
                    <td><span>Derron Group</span></td>
                    <td><span>22/03/2022</span></td>
                    <td><span> <span class="btn-sm btn-success pr-4 pl-4">Delivered</span> </span></td>
                  </tr>
                  <tr>
                    <td><span>Derron Group</span></td>
                    <td><span>22/03/2022</span></td>
                    <td><span> <span class="btn-sm btn-danger pr-4 pl-4">Declined</span> </span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store'
  import pageSidebar from '../components/sidebar.vue'
  export default {
    data() {
      return {
        store
      }
    },
    components: {
      pageSidebar
    },
    mounted() {
      this.store.getUser();
    }
  }
</script>
<style scoped>
table {font-size:14px;}
tbody td {padding:0;}
tbody td>span {
  padding: 5px 10px;
  background-color: #FFF;
  display: block;
  margin: 5px 0;
}
tbody tr:hover td>span {
  background-color: #e9f6fb;
}
</style>