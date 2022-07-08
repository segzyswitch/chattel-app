<template>
  
    <div class="row mt-3">
      <div class="contain">
        <div class="row pt-4 pb-4">
          <div class="col-sm-4 m-auto">
            <div class="input-group">
              <input type="search" id="com_search" class="form-control" placeholder="Search company" style="border-right:0;box-shadow:none;">
              <div class="input-group-append">
                <label for="com_search" class="input-group-text bg-white"><i class="fa fa-search"></i></label>
              </div>
            </div>
          </div>
          <div class="col-sm-8 m-auto pt-3 pb-3">
            <div class="dropdown">
              <button type="button" class="btn btn-link text-primary dropdown-toggle" data-toggle="dropdown">
                Filter
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">By name</a>
                <a class="dropdown-item" href="#">By category</a>
                <a class="dropdown-item" href="#">By voting</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 mb-5">
      <div class="contain">
        <div class="row">
          <div class="col-sm-6">
            <router-link to="/logistics" class="w-100 p-3 logistic-item d-block">
              <div class="row m-0 w-100">
                <div class="icon bg-primary m-auto">
                  <b class="d-block m-auto">DG</b>
                </div>
                <div class="info m-auto d-flex">
                  <div class="w-100 m-auto">
                    <p class="m-0 pt-1 text-primary"><b>Derron Group</b></p>
                    <div class="close" style="font-size:12px;">online</div>
                    <p class="p-0 text-secondary"><small>Covered area: Lagos, Abuja, Ogun</small></p>
                  </div>
                </div>
              </div>
              <div class="row m-0 w-100">
                <p class="m-0">
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-up"></i> 220</span>
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-down"></i> 19</span>
                  <span class="text-primary btn btn-sm">Fast Delivery</span>
                  <span class="text-primary btn btn-sm">Maximum: 30kg</span>
                </p>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6">
            <router-link to="/logistics" class="w-100 p-3 logistic-item d-block">
              <div class="row m-0 w-100">
                <div class="icon bg-primary m-auto">
                  <b class="d-block m-auto">DG</b>
                </div>
                <div class="info m-auto d-flex">
                  <div class="w-100 m-auto">
                    <p class="m-0 pt-1 text-primary"><b>Derron Group</b></p>
                    <div class="close" style="font-size:12px;">online</div>
                    <p class="p-0 text-secondary"><small>Covered area: Lagos, Abuja, Ogun</small></p>
                  </div>
                </div>
              </div>
              <div class="row m-0 w-100">
                <p class="m-0">
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-up"></i> 220</span>
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-down"></i> 19</span>
                  <span class="text-primary btn btn-sm">Fast Delivery</span>
                  <span class="text-primary btn btn-sm">Maximum: 30kg</span>
                </p>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6">
            <router-link to="/logistics" class="w-100 p-3 logistic-item d-block">
              <div class="row m-0 w-100">
                <div class="icon bg-primary m-auto">
                  <b class="d-block m-auto">DG</b>
                </div>
                <div class="info m-auto d-flex">
                  <div class="w-100 m-auto">
                    <p class="m-0 pt-1 text-primary"><b>Derron Group</b></p>
                    <div class="close" style="font-size:12px;">online</div>
                    <p class="p-0 text-secondary"><small>Covered area: Lagos, Abuja, Ogun</small></p>
                  </div>
                </div>
              </div>
              <div class="row m-0 w-100">
                <p class="m-0">
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-up"></i> 220</span>
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-down"></i> 19</span>
                  <span class="text-primary btn btn-sm">Fast Delivery</span>
                  <span class="text-primary btn btn-sm">Maximum: 30kg</span>
                </p>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6">
            <router-link to="/logistics" class="w-100 p-3 logistic-item d-block">
              <div class="row m-0 w-100">
                <div class="icon bg-primary m-auto">
                  <b class="d-block m-auto">DG</b>
                </div>
                <div class="info m-auto d-flex">
                  <div class="w-100 m-auto">
                    <p class="m-0 pt-1 text-primary"><b>Derron Group</b></p>
                    <div class="close" style="font-size:12px;">online</div>
                    <p class="p-0 text-secondary"><small>Covered area: Lagos, Abuja, Ogun</small></p>
                  </div>
                </div>
              </div>
              <div class="row m-0 w-100">
                <p class="m-0">
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-up"></i> 220</span>
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-down"></i> 19</span>
                  <span class="text-primary btn btn-sm">Fast Delivery</span>
                  <span class="text-primary btn btn-sm">Maximum: 30kg</span>
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
      
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      Token: sessionStorage.getItem("Token")
    }
  },
  methods: {
    async fetchLogistics() {
      await axios({
        url: "logistic_user_auth/logistic_list",
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + this.Token
        }
      })
      .then ( response => {
        console.log(response);
      })
      .catch( err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.fetchLogistics();
  }
}
</script>
<style scoped>
.logistic-item {
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0 0 5px inset #ccc;
  margin-bottom: 15px;
  text-decoration: none;
}
.logistic-item:hover {
  box-shadow: 0 0 15px inset #ccc;
}
.logistic-item .icon {
  float: left;
  padding: 5px;
  color: #FFF;
  margin: auto;
  border-radius: 50%;
  width: 50px;
  display: flex;
  height: 50px;
}
.logistic-item .info {
  width: calc(100% - 50px);
  padding-left: 10px;
  float: left;
}

@media only screen and ( max-width: 767px ) {
  
  .logistic-item {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #000068;
    width: calc(100% + 30px)!important;
    margin: 0 -15px 15px -15px;
    box-shadow: 0 0 0;
  }

}
</style>