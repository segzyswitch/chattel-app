<template>
<title>Chattel | Sign in to your account</title>
  <div style="background-image:url('assets/images/bikebg.png');background-size:cover;">

    <section class="container-fluid">
      <div class="row">
        <div class="col-sm-6"></div>
        <div class="col-sm-6 col-12 d-flex" style="min-height:100vh;background-color:#FFFFFF;padding:30px 15px;">
          <div class="w-100 m-auto">
            <div class="text-center">
              <router-link to="/"><img src="assets/images/logo.png" style="height:30px;" /></router-link>
              <h5 class="text-primary mt-4 mb-4">Login To Your Chattel Account</h5>
            </div>
            <form method="get" action="/" @submit.prevent="companyLogin()" class="reg-form">
              <div class="form-group">
                <label>Company Email</label>
                <input type="text" name="email_addr" v-model="formdata.email_addr" class="form-control" required />
                <small class="d-block text-danger" v-if="formErr.email_addr">{{ formErr.email_addr }}</small>
              </div> 
              <div class="form-group">
                <label>Password</label>
                <input type="password" name="paswrd" v-model="formdata.userpaswrd" class="form-control" required />
                <small class="d-block text-danger" v-if="formErr.userpaswrd">{{ formErr.userpaswrd }}</small>
              </div> 
              <div class="form-group text-right">
                <router-link class="text-primary" to="forgot-password">Forgot Password?</router-link>
              </div>
              <div class="form-group">
                <div class="alert alert-danger" v-if="loginErr">{{ loginErr }}</div>
              </div>
              <div class="form-group">
                <button type="submit" v-if="!loadBtn" :disabled="!formOk" class="btn btn-primary btn-block">Login</button>
                <button type="button" disabled v-if="loadBtn" class="btn btn-primary btn-block"><i class="fa fa-spinner fa-spin"></i> Loading</button>
                <!-- <router-link to="/company" class="btn btn-primary btn-block">Login</router-link> -->
              </div>
              <div class="form-group">
                <p>Not a Company, <router-link to="/login" class="text-primary">Login as User</router-link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      formdata: {},
      formErr: {},
      loadBtn: false,
      loginErr: null
    }
  },
  methods: {
    async companyLogin() {
      this.loginErr = null;
      this.loadBtn = true;
      const fd = new FormData();
      fd.append('email', this.formdata.email_addr);
      fd.append('password', this.formdata.userpaswrd);

      await axios({
        url: '/logistic_user_auth/login',
        method: 'POST',
        data: fd,
        timeout: 10000
      })
      .then( response => {
        if ( response.data.status == 'success' ) {
          //console.log(response.data)
          this.Token = response.data.token;
          this.ProfileCode = response.data.user.profile_code;
          sessionStorage.setItem("Token", response.data.token);
          sessionStorage.setItem("ProfileCode", response.data.user.profile_code);
          this.$router.push('/company');
        }else {
          this.loginErr = response.data.message
        }
        this.loadBtn = false
      })
      .catch( err => {
        console.log('Manual error:'+err)
        this.loadBtn = false
        this.loginErr = err
      })
    }
  },
  computed: {
    formOk() {
      let formdata = this.formdata;
      let formErr = this.formErr;

      if ( formdata.email_addr || formdata.email_addr=="" ) {
        if ( !formdata.email_addr.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ) {
          formErr.email_addr = "Invalid email address";
          return false;
        }else {
          formErr.email_addr = null;
        }
      }
      if ( formdata.userpaswrd || formdata.userpaswrd=="" ) {
        if ( formdata.userpaswrd.length < 8 ) {
          formErr.userpaswrd = "Password too short";
          return false;
        }else {
          formErr.userpaswrd = null;
        }
      }
      if ( Object.keys(formdata).length < 2 ) {
        return false;
      }
      return true;
    }
  }
}
</script>