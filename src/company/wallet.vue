<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9" style="background-color:#FAFAFA;">
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
          <div class="contain">
            <div class="row mb-3">
              <div class="col-sm-6" style="overflow:auto;">
                <div class="float-left">
                  <h5 class="mb-4">Wallet</h5>
                  <p class="mb-1">Total Balance</p>
                  <span class="btn bg-white btn-sm">NGN 75,000,000</span>
                </div>
                <div class="float-left pl-3">
                  <h5 class="mb-4">Wallet</h5>
                  <p class="mb-1">Total Total Earnings</p>
                  <span class="btn btn-sm" style="background-color:#EEE;">NGN 75,000,000</span>
                </div>
              </div>
              <div class="col-sm-6 m-auto" style="overflow:auto;">
                <div class="float-right ml-5">
                  <router-link to="/withdrawal" class="bg-warning btn-wallet text-white rounded-circle p-2"><i class="fa fa-download"></i></router-link>
                  <small>Withdraw</small>
                </div>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col-sm-12">
                <ul class="nav nav-pills table-filter">
                  <li class="nav-item">
                    <a class="nav-link btn-sm" href="#">This Week</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link btn-sm active" href="#">This Month</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link btn-sm" href="#">This Year</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col-sm-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>PREVIOUS BALANCE</th>
                        <th>STATUS</th>
                        <th>AMOUNT</th>
                        <th>BALANCE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 300,000</span></td>
                        <td><span>Credit</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span class="text-danger">Debit</span></td>
                        <td><span>NGN -50,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 300,000</span></td>
                        <td><span>Credit</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span class="text-danger">Debit</span></td>
                        <td><span>NGN -50,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 300,000</span></td>
                        <td><span>Credit</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span class="text-danger">Debit</span></td>
                        <td><span>NGN -50,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 300,000</span></td>
                        <td><span>Credit</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                      <tr>
                        <td><span>1 February 2022</span></td>
                        <td><span>NGN 150,000</span></td>
                        <td><span class="text-danger">Debit</span></td>
                        <td><span>NGN -50,000</span></td>
                        <td><span>NGN 150,000</span></td>
                      </tr>
                    </tbody>
                  </table>
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
.btn-wallet {
  width: 40px;
  height: 40px;
  display: block;
  text-align: center;
}
.table-filter .nav-link {
  border: 1px solid #aaa!important;
  color: #aaa;
  padding: 5px;
  margin-right: 7.5px;
}
.table-filter .nav-link.active {
  background-color:  #ccc!important;
  color: #555;
}

thead {
  font-size: 12px;
  border: none;
}
thead th {border:none;}
tbody td {
  padding: 0;
  border: none;
}
tbody td span {
  display: block;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  padding: 5px 5px 5px 10px;
  margin-bottom: 5px;
  background-color: #fff;
}
tbody td:first-child span {
  border-left: 1px solid #ccc;
}
tbody td:last-child span {
  border-right: 1px solid #ccc;
}
tbody tr:hover td>span {
  background-color: #e9f6fb;
}
</style>