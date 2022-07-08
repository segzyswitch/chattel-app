<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9">
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
              <h6 class="clearfix col-sm-12 text-primary mb-4">Derron Group</h6>
              <div class="col-sm-5">
                <img src="assets/images/logistics/logistic-1.jpg" alt="Logistic image" class="w-100 mb-4">

                <h6 class="text-primary mb-2">Description</h6>
                <p class="mb-4">Derron group is an integrated logistics company with global
                perspective that offers diverse services to the maritime</p>

                <h6 class="mb-2 text-primary">Contact Us</h6>
                <p class="mb-4">Call Us: <a href="tel:081646667228" class="text-dark">081646667228</a></p>
                
                <h6 class="mb-3 text-primary">Our services</h6>
                <div class="row">
                  <div class="col-sm-6 pr-0">
                    <div class="img-thumbnail p-2 mb-3">
                      <div class="row">
                        <div class="col-5">
                          <img src="assets/images/logistics/logistic-1.jpg" class="w-100" alt="Service image">
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
                          <img src="assets/images/logistics/logistic-2.jpg" class="w-100" alt="Service image">
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
                          <img src="assets/images/logistics/logistic-3.jpg" class="w-100" alt="Service image">
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
                          <img src="assets/images/logistics/logistic-4.jpg" class="w-100" alt="Service image">
                        </div>
                        <div class="col-7 p-0 d-flex">
                          <p class="w-100 m-auto">Derron Ship</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-7">
                <img src="assets/images/logistics/map-1.jpg" alt="Logistic map" class="w-100 mb-3">
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
                    <router-link to="/message" class="float-right p-2 text-secondary"><i class="fa fa-expand"></i></router-link>
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
export default {
  data() {
    return {
      showchat: false,
      pagebg: ''
    }
  },
  components: {
    pageSidebar
  }
}
</script>
<style scoped>
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
</style>