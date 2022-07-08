<template>
<title>Chattel | Sign in to your account</title>
  <div style="background-image:url('assets/images/bikebg.png'); background-size:cover;">

    <section class="container-fluid">
      <div class="row">
        <div class="col-sm-6"></div>
        <div class="col-sm-6 col-12 d-flex" style="height:100vh;background-color:#FFFFFF;padding:30px 15px;overflow:auto;">
          <div class="w-100 m-auto">
            <div class="text-center bg-white">
              <router-link to="/"><img src="assets/images/logo.png" style="height:30px;" /></router-link>
              <h5 class="text-primary mt-4 mb-4">Sign Up</h5>
            </div>
            <form method="post" action="/" @submit.prevent="registerUser()" class="reg-form">
              <div class="row">
                <div class="form-group col-sm-6">
                  <label>Fullname</label>
                  <input type="text" v-model="fullname" class="form-control" required />
                </div>  
                <div class="form-group col-sm-6">
                  <label>Business Name</label>
                  <input type="text" v-model="business_name" class="form-control" required />
                </div> 
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label>Email</label>
                  <input type="text" v-model="email" class="form-control" required />
                </div>  
                <div class="form-group col-sm-6">
                  <label>Phone</label>
                  <input type="text" v-model="phone_no" class="form-control" required />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label>Business Register Number</label>
                  <input type="text" v-model="business_reg_no" class="form-control" required>
                </div>
                <div class="form-group col-sm-6">
                  <label>NIN</label>
                  <input type="text" v-model="NIN" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="">Bank Account Name</label>
                  <input type="text" v-model="bank_acct_name" class="form-control" required>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">Account Number</label>
                  <input type="tel" v-model="bank_acct_no" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="">Bank Name</label>
                  <input type="text" v-model="bank_name" class="form-control" required>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">Bank Code</label>
                  <input type="tel" v-model="bank_code" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="">Business address</label>
                  <input type="text" v-model="business_address" class="form-control" required>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">City</label>
                  <input type="text" v-model="city" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="">Country</label>
                  <input type="text" v-model="country" class="form-control" required>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">State</label>
                  <input type="text" v-model="state" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="">Post code</label>
                  <input type="text" v-model="postcode" class="form-control" required>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">Country code</label>
                  <input type="text" v-model="countrycode" class="form-control" required>
                </div>
              </div>
              <div class="row mb-4">
                <div class="form-group col-sm-6">
                  <label for="">Password</label>
                  <input type="password" v-model="password" class="form-control" required>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">Confirm Password</label>
                  <input type="password" v-model="password_confirmation" class="form-control" required>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" v-if="!loadbtn" class="btn btn-primary btn-block">Sign Up</button>
                <button type="button" v-if="loadbtn" class="btn btn-primary btn-block"><i class="fa fa-spinner fa-spin"></i> Loading</button>
              </div>  
              <div class="form-group">
                <p>Already a member, <router-link to="/company-login" class="text-primary">Login</router-link></p>
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
      Token: '',
      companyCode: '',
      fullname: '',
      business_name: '',
      email: '',
      password: '',
      business_reg_no: '',
      NIN: '',
      bank_acct_name: '',
      bank_acct_no: '',
      bank_name: '',
      bank_code: '',
      business_address: '',
      state: '',
      country: '',
      city: '',
      postcode: '',
      countrycode: '',
      phone_no: '',
      password_confirmation: '',
      loadbtn: false
    }
  },
  methods: {
    async registerUser() {
      this.loadbtn = true;
      await axios({
        url: 'https://chattelapi.kodeafrika.com/api/logistic_user_auth/register',
        method: "POST",
        data: {
          
        },
        timeout: 5000
      }).then( response => {
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
          sessionStorage.setItem("companyCode", response.data.user.profile_code);
          this.$router.push('/dashboard');
        }else {
          this.$swal.fire({
            icon: 'error',
            type: 'warning',
            title: 'CHATTEL',
            text: response.data.message
          })
        }
        this.loadbtn = false;
      }).catch( err => {
        this.$swal.fire({
          icon: 'error',
          type: 'warning',
          title: 'CHATTEL',
          text: err.message
        })
        this.loadbtn = false;
      })
    }
  },
  mounted() {
    if ( sessionStorage.getItem('Token') && sessionStorage.getItem('companyCode') ) {
      this.$router.push('/dashboard');
    }
  }
}
</script>