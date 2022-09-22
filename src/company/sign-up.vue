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
              <div class="w-100 name-form mb-4" v-if="activeForm==1">
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label>Fullname</label>
                    <input type="text" v-model="formdata.fullname" class="form-control" required />
                  </div>  
                  <div class="form-group col-sm-6">
                    <label>Business Name</label>
                    <input type="text" v-model="formdata.business_name" class="form-control" required />
                  </div> 
                </div>
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label>Email</label>
                    <input type="text" v-model="formdata.email" class="form-control" required />
                  </div>  
                  <div class="form-group col-sm-6">
                    <label>Phone</label>
                    <input type="text" v-model="formdata.phone_no" class="form-control" required />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="">Password</label>
                    <input type="password" v-model="formdata.password" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="">Confirm Password</label>
                    <input type="password" v-model="formdata.password_confirmation" class="form-control" required>
                  </div>
                </div>
              </div>

              <div class="w-100 address-form mb-4" v-if="activeForm==2">
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="">Business address</label>
                    <input type="text" v-model="formdata.business_address" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="">City</label>
                    <input type="text" v-model="formdata.city" class="form-control" required>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="">Country</label>
                    <input type="text" v-model="formdata.country" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="">State</label>
                    <input type="text" v-model="formdata.state" class="form-control" required>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="">Post code</label>
                    <input type="text" v-model="formdata.postcode" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="">Country code</label>
                    <input type="text" v-model="formdata.countrycode" class="form-control" required>
                  </div>
                </div>
              </div>

              <div class="w-100 business-form mb-4" v-if="activeForm==3">
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label>Business Register Number</label>
                    <input type="text" v-model="formdata.business_reg_no" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label>NIN</label>
                    <input type="text" v-model="formdata.NIN" class="form-control" required>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="">Bank Account Name</label>
                    <input type="text" v-model="formdata.bank_acct_name" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="">Account Number</label>
                    <input type="tel" v-model="formdata.bank_acct_no" class="form-control" required>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="">Bank Name</label>
                    <input type="text" v-model="formdata.bank_name" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="">Bank Code</label>
                    <input type="tel" v-model="formdata.bank_code" class="form-control" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="bvn">BVN</label>
                  <input type="text" class="form-control" v-model="formdata.bvn" required>
                </div>
              </div>

              <div class="w-100 about-form mb-4" v-if="activeForm==4">
                <div class="row">
                  <div class="form-group col-sm-6">
                    <label for="">Maximum Item Size</label>
                    <input type="text" v-model="formdata.maximum_size" class="form-control" required>
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="">Covered Area</label>
                    <input type="text" v-model="formdata.covered_area" class="form-control" placeholder="e.g, Lagos, Ibadan, Osun" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="about">About Company</label>
                  <textarea v-model="about" id="about" class="form-control" style="min-height:120px;"></textarea>
                </div>
              </div>

              <div class="form-group text-center">
                <button type="button" @click="activeForm--" class="btn btn-sm btn-light" :disabled="activeForm==1"><i class="fa fa-caret-left"></i> Back</button>
                <b class="p-2 pr-4 pl-4">{{ activeForm }}/4</b>
                <button type="button" @click="activeForm++" class="btn btn-sm btn-primary" :disabled="activeForm==4">Next <i class="fa fa-caret-right"></i></button>
              </div>

              <div class="form-group">
                <button type="submit" v-if="!loadbtn" class="btn btn-primary btn-block" :disabled="!formOk">Sign Up</button>
                <button type="button" v-if="loadbtn" class="btn btn-primary btn-block" disabled><i class="fa fa-spinner fa-spin"></i> Loading</button>
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
      formdata: {},
      loadbtn: false,
      activeForm: 1,
    }
  },
  methods: {
    async registerUser() {
      this.loadbtn = true;
      const fd = new FormData();
      fd.append('fullname', this.formdata.fullname);
      fd.append('NIN', this.formdata.NIN);
      fd.append('business_name', this.formdata.business_name);
      fd.append('business_reg_no', this.formdata.business_reg_no);
      fd.append('business_address', this.formdata.business_address);
      fd.append('bank_name', this.formdata.bank_name);
      fd.append('bank_code', this.formdata.bank_code);
      fd.append('bank_acct_no', this.formdata.bank_acct_no);
      fd.append('bank_acct_name', this.formdata.bank_acct_name);
      fd.append('bvn', this.formdata.bvn);
      fd.append('city', this.formdata.city);
      fd.append('state', this.formdata.state);
      fd.append('country', this.formdata.country);
      fd.append('postcode', this.formdata.postcode);
      fd.append('countrycode', this.formdata.countrycode);
      fd.append('maximum_size', this.formdata.maximum_size);
      fd.append('covered_area', this.formdata.covered_area);
      fd.append('about', this.formdata.about);
      fd.append('phone_no', this.formdata.phone_no);
      fd.append('email', this.formdata.email);
      fd.append('password', this.formdata.password);
      fd.append('password_confirmation', this.formdata.password_confirmation);
      await axios({
        url: '/logistic_user_auth/register',
        method: "POST",
        data: fd,
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
  },
  computed: {
    formOk() {
      let formdata = this.formdata;
      if ( !formdata.fullname || formdata.fullname.length<6 ) {
        return false
      }else {
        return true
      }
    }
  }
}
</script>