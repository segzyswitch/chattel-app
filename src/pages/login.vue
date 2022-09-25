<template>
  <div style="background-image:url('assets/images/bikebg.png'); background-size:cover;">
    <title>Chattel | Sign in to your account</title>

    <section class="container-fluid">
      <div class="row">
        <div class="col-sm-6"></div>
        <div class="col-sm-6 col-12 d-flex" style="min-height:100vh;background-color:#FFFFFF;padding:30px 15px;">
          <div class="w-100 m-auto">
            <div class="text-center">
              <router-link to="/"><img src="assets/images/logo.png" style="height:30px;" /></router-link>
              <h5 class="text-primary mt-4 mb-4">Login To Your Chattel Account</h5>
            </div>
            <form method="POST" @submit.prevent="userLogin()" class="reg-form">
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" v-model="formdata.email" class="form-control" />
                <small class="text-danger" v-if="formErr.email">{{ formErr.email }}</small>
              </div> 
              <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="formdata.password" class="form-control" />
                <small class="text-danger" v-if="formErr.password">{{ formErr.password }}</small>
              </div> 
              <div class="form-group text-right">
                <router-link class="text-primary" to="forgot-password">Forgot Password?</router-link>
              </div>
              <div class="form-group">
                <button type="sumbit" v-if="!loadBtn" :disabled="!formOk" class="btn btn-primary btn-block">Login</button>
                <button type="button" v-if="loadBtn" class="btn btn-primary btn-block disabled"><i class="fa fa-spinner fa-spin"></i> Loading</button>
              </div>
              <div class="form-group">
                <p>Not a User, <router-link to="/company-login" class="text-primary">Login as Company</router-link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formdata: {},
      formErr: {},
      loadBtn: false
    }
  },
  methods: {
    async userLogin() {
      this.loadBtn = true
      await axios({
        url: 'user_auth/login',
        method: "POST",
        data: {
          'email': this.formdata.email,
          'password': this.formdata.password
        }
      })
      .then( response => {
        if ( response.data.status == 'success' ) {
          this.$swal.fire({
            icon: 'success',
            type: 'success',
            title: 'CHATTEL',
            text: response.data.message
          })
          this.Token = response.data.token;
          this.ProfileCode = response.data.user.profile_code;
          sessionStorage.setItem("Token", response.data.token);
          sessionStorage.setItem("ProfileCode", response.data.user.profile_code);
          this.$router.push('/dashboard');
        }else {
          this.$swal.fire({
            icon: 'error',
            type: 'warning',
            title: 'CHATTEL',
            text: response.data.message
          })
        }
        this.loadBtn = false
      })
      .catch( err => {
        this.$swal.fire({
          icon: 'error',
          type: 'warning',
          title: 'CHATTEL',
          text: err.message
        })
        this.loadBtn = false
      })
    }
  },
  computed: {
    formOk() {
      let formdata = this.formdata;
      let formErr = this.formErr;

      if ( formdata.email || formdata.email=="" ) {
        if ( !formdata.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ) {
          formErr.email = "Invalid email address";
          return false;
        }else {
          formErr.email = null;
        }
      }
      if ( formdata.password || formdata.password=="" ) {
        if ( formdata.password.length < 8 ) {
          formErr.password = "Password too short";
          return false;
        }else {
          formErr.password = null;
        }
      }
      if ( Object.keys(formdata).length < 2 ) {
        return false;
      }
      return true;
    }
  },
  mounted() {
    if ( sessionStorage.getItem('Token') && sessionStorage.getItem('ProfileCode') ) {
      this.$router.push('/dashboard');
    }
  }
}
</script>