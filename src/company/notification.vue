<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9 bg-light">
        <!-- TOP STICKY NAV -->
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

        <div class="row">
          <div class="contain">
            <div class="row mt-4">
              <div class="col-sm-12">
                <h6 class="mb-4">Notification</h6>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <div class="w-100" style="overflow:auto;">
                    <div class="float-left">* You have a message from a customer</div>
                    <div class="float-right rounded-circle btn-primary text-center" style="width:20px;height:20px;font-size:12px;">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <div class="w-100" style="overflow:auto;">
                    <div class="float-left">* You have a message from a customer</div>
                    <div class="float-right rounded-circle btn-primary text-center" style="width:20px;height:20px;font-size:12px;">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <div class="w-100" style="overflow:auto;">
                    <div class="float-left">* You have a message from a customer</div>
                    <div class="float-right rounded-circle btn-primary text-center" style="width:20px;height:20px;font-size:12px;">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="alert alert-warning">
                  <div class="w-100" style="overflow:auto;">
                    <div class="float-left">* You have a message from a customer</div>
                    <div class="float-right rounded-circle btn-primary text-center" style="width:20px;height:20px;font-size:12px;">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                  <div class="w-100 mt-3" style="overflow:auto;">
                    <span>Message</span>
                    <span class="float-right">7pm February 2022</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mb-5">
              <div class="col-sm-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="bg-primary text-white">
                      <tr>
                        <th>Customer Name</th>
                        <th>Upload Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span>Kayode Bamidele</span></td>
                        <td><span>22/03/2022</span></td>
                        <td><span><button style="font-size:10px;padding:1px 20px 1px 20px;" class="btn btn-success border-0">Approved</button></span></td>
                      </tr>
                      <tr>
                        <td><span>Kayode Bamidele</span></td>
                        <td><span>22/03/2022</span></td>
                        <td><span><button style="font-size:10px;padding:1px 20px 1px 20px;" class="btn btn-success border-0">Approved</button></span></td>
                      </tr>
                      <tr>
                        <td><span>Kayode Bamidele</span></td>
                        <td><span>22/03/2022</span></td>
                        <td><span><button style="font-size:10px;padding:1px 20px 1px 20px;" class="btn btn-warning border-0">Pending</button></span></td>
                      </tr>
                      <tr>
                        <td><span>Kayode Bamidele</span></td>
                        <td><span>22/03/2022</span></td>
                        <td><span><button style="font-size:10px;padding:1px 20px 1px 20px;" class="btn btn-danger border-0">Rejected</button></span></td>
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
.alert-warning {
  margin-bottom: 30px!important;
  font-size: 14px;
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
  font-size: 14px;
  padding: 5px;
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