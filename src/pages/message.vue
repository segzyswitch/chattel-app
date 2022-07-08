<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9">
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
          <div class="contain" style="background-color:#FAFAFA;">
            <!-- CHAT PANEL -->
            <div class="chat-panel">
              <div class="d-block chat-head p-3">
                <div class="float-left rounded-circle bg-primary text-light p-2">DG</div>
                <p class="float-left pl-3 pt-2 m-0 text-primary">Darren Groups</p>
                <router-link to="/agreement" class="btn btn-sm bg-white mt-1 text-primary float-right">Agreement form</router-link>
              </div>
              <div class="card-body p-4 pt-0 message-panel">
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
              </div>
              <form action="/" @submit.prevent="sendMessage" class="w-100 msg-form">
                <input type="text" class="form-control p-3 msg-input" placeholder="Send a message">
                <div class="w-100 form-btns">
                  <label for="imagefile" type="button" class="btn pt-2 pb-2 pl-0 ml-3 text-primary"><i class="fa fa-photo"></i></label>
                  <label for="imagefile" type="button" class="btn pt-2 pb-2 pl-0 ml-3 text-primary"><i class="fa fa-video-camera"></i></label>
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
</template>

<script>
import pageSidebar from '../components/sidebar.vue'
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
.message-panel {
  overflow: auto;
  font-size: 15px;
  min-height: 200px;

}
.chat-head {
  overflow: auto;
  border-radius: 5px;
  position: sticky;
  top: 70px;
  z-index: 1;
  background-color: #FAFAFA;
  box-shadow: 0 3px #eee;
}
.msg-form {
  position: sticky;
  bottom: 0;
  background-color: #FAFAFA;
  padding: 0 10px 10px 10px;
  border-top: 1px solid #000068!important;
}
.msg-input {
  border: none!important;
  box-shadow: 0 0 0!important;
  background-color: #FAFAFA!important;
}
.form-btns button {
  box-shadow: 0 0 0;
}
</style>