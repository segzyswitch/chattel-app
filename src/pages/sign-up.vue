<template>
  <div style="background-image:url('assets/images/bikebg.png'); background-size:cover;">
    <title>Chattel | Sign in to your account</title>

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
                  <label>First Name</label>
                  <input type="text" v-model="formdata.surname" class="form-control" required />
                  <small class="text-danger" v-if="formErr.surname">{{ formErr.surname }}</small>
                </div>  
                <div class="form-group col-sm-6">
                  <label>Last Name</label>
                  <input type="text" v-model="formdata.firstname" class="form-control" required />
                  <small class="text-danger" v-if="formErr.firstname">{{ formErr.firstname }}</small>
                </div> 
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label>Email</label>
                  <input type="text" v-model="formdata.email" class="form-control" required />
                  <small class="text-danger" v-if="formErr.email">{{ formErr.email }}</small>
                </div>  
                <div class="form-group col-sm-6">
                  <label>Phone</label>
                  <input type="text" v-model="formdata.phone_no" class="form-control" required />
                  <small class="text-danger" v-if="formErr.phone_no">{{ formErr.phone_no }}</small>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label>Gender</label>
                  <select v-model="formdata.gender" class="form-control" required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <small class="text-danger" v-if="formErr.gender">{{ formErr.gender }}</small>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">Street address</label>
                  <input type="text" v-model="formdata.address" class="form-control" required>
                  <small class="text-danger" v-if="formErr.address">{{ formErr.address }}</small>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="">City</label>
                  <input type="text" v-model="formdata.city" class="form-control" required>
                  <small class="text-danger" v-if="formErr.city">{{ formErr.city }}</small>
                </div>
                <div class="form-group col-sm-6">
                  <label for="country">Country</label>
                  <select id="country" class="form-control" v-model="formdata.country" required>
                    <option value="">Select country</option>
                    <option v-for="region in countryIso"
                      :key="region.alpha3Code"
                      :value="{'name':region.englishShortName, 'code':region.alpha3Code}">
                      {{ region.englishShortName }}
                    </option>
                  </select>
                  <small class="text-danger" v-if="formErr.country">{{ formErr.country }}</small>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="">State</label>
                  <input type="text" v-model="formdata.state" class="form-control" required>
                  <small class="text-danger" v-if="formErr.state">{{ formErr.state }}</small>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">Post code</label>
                  <input type="text" v-model="postcode" readonly class="form-control" required>
                </div>
              </div>
              <div class="row mb-4">
                <div class="form-group col-sm-6">
                  <label for="">Password</label>
                  <input type="password" v-model="formdata.password" class="form-control" required>
                  <small class="text-danger" v-if="formErr.password">{{ formErr.password }}</small>
                </div>
                <div class="form-group col-sm-6">
                  <label for="">Confirm Password</label>
                  <input type="password" v-model="formdata.password_confirmation" class="form-control" required>
                  <small class="text-danger" v-if="formErr.password_confirmation">{{ formErr.password_confirmation }}</small>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" :disabled="!formOk" v-if="!loadbtn" class="btn btn-primary btn-block">Sign Up</button>
                <button type="button" v-if="loadbtn" class="btn btn-primary btn-block"><i class="fa fa-spinner fa-spin"></i> Loading</button>
              </div>  
              <div class="form-group">
                <p>Already a member, <router-link to="/login" class="text-primary">Login</router-link></p>
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
import countryIso from '../assets/country-and-iso.json'
export default {
  name: "UserRegister",
  data() {
    return {
      formdata: {},
      formErr: {},
      countryIso,
      Token: '',
      ProfileCode: '',
      loadbtn: false
    }
  },
  methods: {
    async registerUser() {
      this.loadbtn = true;
      const fd = {
        "firstname": this.formdata.firstname,
        "surname": this.formdata.surname,
        "gender": this.formdata.gender,
        "address": this.formdata.address,
        "state": this.formdata.state,
        "country": this.formdata.country.name,
        "city": this.formdata.city,
        "postcode": this.postcode,
        "countrycode": this.formdata.country.code,
        "phone_no": this.formdata.phone_no,
        "email": this.formdata.email,
        "password": this.formdata.password,
        "password_confirmation": this.formdata.password_confirmation
      };
      await axios({
        url: 'https://chattelapi.kodeafrika.com/api/user_auth/register',
        method: "POST",
        data: fd,
        timeout: 10000
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
  computed: {
    postcode() {
      if ( this.formdata.country ) {
        return this.formdata.country.code
      }else {
        return null;
      }
    },
    
    formOk() {
      let formdata = this.formdata;
      let formErr = this.formErr;

      if ( formdata.surname || formdata.surname=="" ) {
        if ( formdata.surname.length < 3 ) {
          formErr.surname = "Name too short";
          return false;
        }else {
          formErr.surname = null;
        }
      }
      if ( formdata.firstname || formdata.firstname=="" ) {
        if ( formdata.firstname.length < 3 ) {
          formErr.firstname = "Name too short";
          return false;
        }else {
          formErr.firstname = null;
        }
      }
      if ( formdata.phone_no || formdata.phone_no=="" ) {
        if ( formdata.phone_no.length < 8 ) {
          formErr.phone_no = "Invalid phone number";
          return false;
        }else {
          formErr.phone_no = null;
        }
      }
      if ( formdata.email || formdata.email=="" ) {
        if ( !formdata.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ) {
          formErr.email = "Invalid email address";
          return false;
        }else {
          formErr.email = null;
        }
      }
      if ( formdata.gender || formdata.gender=="" ) {
        if ( formdata.gender.length < 3 ) {
          formErr.gender = "Select an option";
          return false;
        }else {
          formErr.gender = null;
        }
      }
      if ( formdata.address || formdata.address=="" ) {
        if ( formdata.address.length < 8 ) {
          formErr.address = "Address too short";
          return false;
        }else {
          formErr.address = null;
        }
      }
      if ( formdata.city || formdata.city=="" ) {
        if ( formdata.city.length < 8 ) {
          formErr.city = "City too short";
          return false;
        }else {
          formErr.city = null;
        }
      }
      if ( formdata.country || formdata.country=="" ) {
        if ( formdata.country.length < 8 ) {
          formErr.country = "Select an option";
          return false;
        }else {
          formErr.country = null;
        }
      }
      if ( formdata.state || formdata.state=="" ) {
        if ( formdata.state.length < 3 ) {
          formErr.state = "Length too short";
          return false;
        }else {
          formErr.state = null;
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
      if ( formdata.password_confirmation || formdata.password_confirmation=="" ) {
        if ( formdata.password_confirmation !== formdata.password ) {
          formErr.password_confirmation = "Passwords do not match";
          return false;
        }else {
          formErr.password_confirmation = null;
        }
      }
      if ( Object.keys(formdata).length < 11 ) {
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