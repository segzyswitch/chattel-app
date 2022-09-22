<template>
  <title>{{ Logistic.business_name+" logistics - " }} Chattel</title>
  <div class="container-fluid">
    
    <!-- PAGE LOADER -->
    <div class="page-loader d-flex text-center bg-white" v-if="pageLoader">
      <div class="w-100 m-auto text-primary display-4">
        <i class="fa fa-spinner fa-spin"></i>
      </div>
    </div>

    <div class="row">
      <pageSidebar />

      <div class="col-sm-9" v-if="!pageLoader">
        <nav class="row top-nav sticky-top">
          <div class="contain">
            <div class="float-left pt-2 pb-2">
              <a href="#" @click.prevent="this.$router.go(-1)" class="d-block pt-3 pb-3 text-primary"><i class="fa fa-arrow-left"></i></a>
            </div>
            <div class="float-right pt-2 pb-2">
              <router-link to="/notification" class="d-block pt-3 pb-3 text-primary"><i class="fa fa-bell"></i></router-link>
            </div>
          </div>
        </nav>

        <div class="row pt-4" :style="'background-color:'+pagebg">
          <div class="contain">
            <div class="row">
              <h4 class="clearfix col-sm-12 text-primary mb-4">{{ Logistic.business_name }}</h4>
              <div class="col-sm-5">
                <div class="w-100 p-3">
                  <div class="img-100 d-flex bg-primary m-auto text-white">
                    <div class="w-100 m-auto text-center">{{ Logistic.business_name.substring(0,2) }}</div>
                  </div>
                </div>

                <p class="mt-3">
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-up"></i> 10</span>
                  <span class="text-primary btn-sm btn"><i class="fa fa-thumbs-o-down"></i> 12</span>
                  <span class="text-primary btn btn-sm">Fast Delivery</span>
                  <span class="text-primary btn btn-sm">Maximum: {{ Logistic.maximum_size }}</span>
                </p>
                <h6 class="text-primary mb-2">Description</h6>
                <p class="mb-4">{{Logistic.about}}</p>

                <h6 class="mb-2 text-primary">Contact Us</h6>
                <p class="mb-5">Call Us: <a :href="'tel:'+Logistic.phone_no" class="text-primary">{{Logistic.phone_no}}</a></p>

                <h6 class="mb-2 text-primary">Comments</h6>
                <form action="/" @submit.prevent="addComment()" class="comment-form">
                  <div class="form-group mb-2">
                    <textarea class="form-control" v-model="feed" placeholder="Say something..." required></textarea>
                  </div>
                  <div class="form-group" style="overflow:auto;">
                    <small class="btn btn-sm text-danger" v-if="commentErr">{{ commentErr }}</small>
                    <span class="btn" v-if="commentOk">{{ commentOk }}</span>
                    <button class="btn btn-sm btn-dark pull-right" type="submit" v-if="!commentBtn">Add comment</button>
                    <button class="btn btn-sm btn-dark pull-right" type="button" disabled v-if="commentBtn"><i class="fa fa-spinner fa-spin"></i> Sending...</button>
                  </div>
                </form>

                <div class="comment-list w-100 mb-5" v-if="commentData">
                  <div v-for="item in commentData" :key="item.id" class="comment-item w-100">
                    <div class="comment-img text-white d-flex bg-secondary" style="margin-top:10px;">
                      <p style="text-transform:uppercase;" class="m-0 m-auto text-center">{{ item.user.substring(0,2) }}</p>
                    </div>
                    <div class="comment-info p-2">
                      <b class="d-block">{{ item.user }}</b>
                      <span class="d-block">{{ item.comments }}</span>
                      <small style="opacity:0.5;">{{ store.toFullDate(item.commented_on) }}</small>
                    </div>
                  </div>
                </div>

                <!--                 
                <h6 class="mb-3 text-primary">Our services</h6>
                <div class="row">
                  <div class="col-sm-6 pr-0">
                    <div class="img-thumbnail p-2 mb-3">
                      <div class="row">
                        <div class="col-5">
                          <img src="../../public/assets/images/logistics/logistic-1.jpg" class="w-100" alt="Service image">
                        </div>
                        <div class="col-7 p-0 d-flex">
                          <p class="w-100 m-auto">Derron Bike</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 pr-0">
                    <div class="img-thumbnail p-2 mb-3">
                      <div class="row">
                        <div class="col-5">
                          <img src="../../public/assets/images/logistics/logistic-2.jpg" class="w-100" alt="Service image">
                        </div>
                        <div class="col-7 p-0 d-flex">
                          <p class="w-100 m-auto">Derron Cars</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 pr-0">
                    <div class="img-thumbnail p-2 mb-3">
                      <div class="row">
                        <div class="col-5">
                          <img src="../../public/assets/images/logistics/logistic-3.jpg" class="w-100" alt="Service image">
                        </div>
                        <div class="col-7 p-0 d-flex">
                          <p class="w-100 m-auto">Derron Lorry</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 pr-0">
                    <div class="img-thumbnail p-2 mb-3">
                      <div class="row">
                        <div class="col-5">
                          <img src="../../public/assets/images/logistics/logistic-4.jpg" class="w-100" alt="Service image">
                        </div>
                        <div class="col-7 p-0 d-flex">
                          <p class="w-100 m-auto">Derron Ship</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                -->
              </div>

              <div class="col-sm-7">
                <img src="../../public/assets/images/logistics/map-1.jpg" alt="Logistic map" class="w-100 mb-3">
                <p class="mb-4">
                  <span class="mr-4"><i class="fa fa-square text-primary"></i> Coverage Area</span>
                  <span><i class="fa fa-square text-warning"></i> Coverage Area</span>
                </p>
                <!-- CHAT PANEL -->
                <div class="chat-panel">
                  <div class="d-block chat-head card-header p-2 mb-5" v-if="!showchat">
                    <div @click="showchat=true, pagebg='#efeff6'" class="float-left rounded-circle bg-secondary text-light p-2" style="cursor:pointer;">DG</div>
                    <p @click="showchat=true, pagebg='#efeff6'" class="float-left pl-3 pt-2 m-0 text-secondary" style="cursor:pointer;">Chat with us</p>
                    <a href="javascript:void(0)" class="float-right p-2 text-secondary"><i class="fa fa-ellipsis-h"></i></a>
                  </div>
                  <div class="d-block chat-head card-header p-2" v-if="showchat">
                    <div class="float-left rounded-circle bg-primary text-light p-2">DG</div>
                    <p class="float-left pl-3 pt-2 m-0 text-primary">Darren Groups</p>
                    <a href="javascript:void(0)" class="float-right p-2 text-secondary"><i class="fa fa-ellipsis-h"></i></a>
                    <a href="javascript:void(0)" @click="showchat=false, pagebg='transparent'" class="float-right p-2 text-secondary"><i class="fa fa-times"></i></a>
                    <router-link
                      :to="{name:'Message', params: {logistic_profile_code: Logistic.profile_code}}"
                      class="float-right p-2 text-secondary">
                      <i class="fa fa-expand"></i>
                    </router-link>
                  </div>
                  <div class="card-body p-3 message-panel" v-if="showchat">
                    <div class="row left-msg p-2">
                      <div class="col-sm-9 p-2 rounded-1" style="background-color:#efeff6;">
                        <div class="float-left rounded-circle p-1 bg-primary text-white mr-3">DG</div>
                        <p class="m-0 p-1">Welcome to derron</p>
                      </div>
                    </div>
                    <div class="row left-msg p-2">
                      <div class="col-sm-9 p-2 rounded-1" style="background-color:#efeff6;">
                        <div class="float-left rounded-circle p-1 bg-primary text-white mr-3">DG</div>
                        <p class="m-0 p-1">What can we offer you ?</p>
                      </div>
                    </div>
                    <div class="row right-msg p-2">
                      <div class="col-sm-9 offset-3 p-2 rounded-1" style="background-color:#fdfcf6;">
                        <div class="float-left rounded-circle p-1 pr-2 bg-danger text-white mr-3">OT</div>
                        <p class="m-0 p-1">I want to send a package to abuja</p>
                      </div>
                    </div>
                    <div class="row right-msg p-2">
                      <div class="col-sm-9 offset-3 p-2 rounded-1" style="background-color:#fdfcf6;">
                        <div class="float-left rounded-circle p-1 pr-2 bg-danger text-white mr-3">OT</div>
                        <p class="m-0 p-1">How much will it cost?</p>
                      </div>
                    </div>
                    <div class="row left-msg p-2">
                      <div class="col-sm-9 p-2 rounded-1" style="background-color:#efeff6;">
                        <div class="float-left rounded-circle p-1 bg-primary text-white mr-3">DG</div>
                        <p class="m-0 p-1">Welcome to derron</p>
                      </div>
                    </div>
                    <div class="row left-msg p-2">
                      <div class="col-sm-9 p-2 rounded-1" style="background-color:#efeff6;">
                        <div class="float-left rounded-circle p-1 bg-primary text-white mr-3">DG</div>
                        <p class="m-0 p-1">What can we offer you ?</p>
                      </div>
                    </div>
                    <div class="row right-msg p-2">
                      <div class="col-sm-9 offset-3 p-2 rounded-1" style="background-color:#fdfcf6;">
                        <div class="float-left rounded-circle p-1 pr-2 bg-danger text-white mr-3">OT</div>
                        <p class="m-0 p-1">I want to send a package to abuja</p>
                      </div>
                    </div>
                    <div class="row right-msg p-2">
                      <div class="col-sm-9 offset-3 p-2 rounded-1" style="background-color:#fdfcf6;">
                        <div class="float-left rounded-circle p-1 pr-2 bg-danger text-white mr-3">OT</div>
                        <p class="m-0 p-1">How much will it cost?</p>
                      </div>
                    </div>
                    <div class="row left-msg p-2">
                      <div class="col-sm-9 p-2 rounded-1" style="background-color:#efeff6;">
                        <div class="float-left rounded-circle p-1 bg-primary text-white mr-3">DG</div>
                        <p class="m-0 p-1">What kind of package do you want to send  ?</p>
                      </div>
                    </div>
                  </div>
                  <form action="/" @submit.prevent="sendMessage" class="w-100 bg-white" style="position:sticky;bottom:0;" v-if="showchat">
                    <input type="text" class="form-control bg-light p-3 msg-input" placeholder="Send a message">
                    <div class="bg-white form-btns">
                      <label for="imagefile" type="button" class="btn pt-2 pb-2 pl-0 ml-3 bg-white text-primary"><i class="fa fa-photo"></i></label>
                      <button type="button" class="btn pt-2 pb-2 pl-0 ml-3 bg-white text-primary"><i class="fa fa-video-camera"></i></button>
                      <button type="submit" class="btn float-right btn-primary">Reply</button>
                      <input type="file" id="imagefile" style="display:none;">
                    </div>
                  </form>
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
import axios from 'axios'
import {store} from '../store'
export default {
  data() {
    return {
      store,
      showchat: false,
      pagebg: '',
      companyId: this.$route.params.company_id,
      Logistic: [],
      pageLoader: true,
      Token: sessionStorage.getItem("Token"),
      feed: null,
      commentBtn: false,
      commentOk: null,
      commentErr: null,
      commentData: []
    }
  },
  methods: {
    async fetchLogistic() {
      this.pageLoader = true;
      await axios({
        method: 'GET',
        url: '/logistic_user_auth/logistic_profile?profile_code='+this.companyId,
        headers: {
          'Authorization': 'Bearer ' + this.Token
        }
      })
      .then ( response => {
        console.log(response.data)
        this.Logistic = response.data
        this.pageLoader = false;
      })
      .catch( err => {
        console.log("Error handle"+err.message)
        this.pageLoader = true;
        if (err == 'Request failed with status code 503') {
          sessionStorage.removeItem('Token');
          this.$router.push("/")
          console.log(err)
        }
      })
    },
    
    async addComment() {
      this.commentBtn = true
      const fd = new FormData();
      fd.append("user_profile_code", this.store.userDetails.profile_code)
      fd.append("logistic_profile_code", this.companyId)
      fd.append("comment", this.feed)
      await axios({
        method: 'POST',
        url: '/user_auth/add_comment',
        data: fd,
        headers: {
          'Authorization': 'Bearer ' + this.Token
        }
      })
      .then( response =>{
        if (response.data.status == true) {
          this.commentErr = ""
          this.feed = ""
          this.commentOk = "Review sent!"
          this.fetchComments();
        }else {
          this.commentErr = response.data
          this.commentOk = ""
        }
        this.commentBtn = false
      })
      .catch( err => {
        this.commentErr = err.message
        this.commentOk = ''
        this.commentBtn = false
      })
    },

    async fetchComments() {
      await axios({
        method: 'GET',
        url: '/user_auth/view_comments?logistic_profile_code='+this.companyId,
        headers: {
          'Authorization': 'Bearer ' + this.Token
        }
      })
      .then( response => {
        console.log(response.data)
        if ( response.data.status == true ) {
          this.commentData = response.data.details
        }else {
          this.commentDataErr = "Error fetching comments";
        }
      })
      .catch( err => {
        this.commentDataErr = "Error fetching comments. "+err.message;
      });
    }
  },
  components: {
    pageSidebar
  },
  mounted() {
    this.fetchLogistic();
    this.fetchComments();
  }
}
</script>


<style scoped>
.img-100 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 40px;
}
.message-panel {
  min-height: 200px;
  height: calc(100vh - 350px);
  overflow: auto;
  font-size:15px;
}
.chat-panel {
  background-color: #FFF;
  overflow: auto;
  position: sticky;
  bottom: 0;
}
.chat-head {
  overflow: auto;
  background-color: #FFF;
  border: 1px solid #aac;
  border-radius: 5px;
}
.msg-input {
  border: none!important;
  box-shadow: 0 0 0!important;
}
.form-btns button {
  box-shadow: 0 0 0;
}

.comment-item {
  overflow: auto;
  width: 100%;
}
.comment-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  font-size: 12px;
  float: left;
}
.comment-info {
  width: calc(100% - 40px);
  float: left;
  font-size: 90%;
}

</style>