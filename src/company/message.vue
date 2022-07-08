<template>
  <title>Chattel | Dashboard</title>
  <div class="container-fluid">
    <div class="row">
      <pageSidebar />

      <div class="col-sm-9 alert-warning" style="min-height:100vh;">
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
          <div class="col-sm-8 bg-light">
            <div class="chat-head p-2 w-100">
              <div class="img"><img src="assets/images/users/Ellipse 7.jpg" class="w-100" /></div>
              <div class="chat-head-info p-2 pl-3">Michael Jones</div>
            </div>

            <div class="chat-body p-4 mt-3 mb-5">
              <div class="row left-message mb-3">
                <div class="img float-left">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
                <div class="float-left message-item ml-2">
                  Hello
                </div>
              </div>
              <div class="row right-message mb-3">
                <div class="ml-auto bg-primary text-white message-item mr-2">
                  Hello
                </div>
                <div class="img">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
              </div>
              <div class="row left-message mb-3">
                <div class="img float-left">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
                <div class="float-left message-item ml-2">
                  I want to carry some goods amd i need you logistics company
                </div>
              </div>
              <div class="row right-message mb-3">
                <div class="ml-auto bg-primary text-white message-item mr-2">
                  You will need to fill agreement form stating the goods you want to carry after we finish talking about price 
                </div>
                <div class="img">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
              </div>
              <div class="row left-message mb-3">
                <div class="img float-left">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
                <div class="float-left message-item ml-2">
                  Hello
                </div>
              </div>
              <div class="row right-message mb-3">
                <div class="ml-auto bg-primary text-white message-item mr-2">
                  Hello
                </div>
                <div class="img">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
              </div>
              <div class="row left-message mb-3">
                <div class="img float-left">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
                <div class="float-left message-item ml-2">
                  I want to carry some goods amd i need you logistics company
                </div>
              </div>
              <div class="row right-message mb-3">
                <div class="ml-auto bg-primary text-white message-item mr-2">
                  You will need to fill agreement form stating the goods you want to carry after we finish talking about price 
                </div>
                <div class="img">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
              </div>
              <div class="row left-message mb-3">
                <div class="img float-left">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
                <div class="float-left message-item ml-2">
                  Hello
                </div>
              </div>
              <div class="row right-message mb-3">
                <div class="ml-auto bg-primary text-white message-item mr-2">
                  Hello
                </div>
                <div class="img">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
              </div>
              <div class="row left-message mb-3">
                <div class="img float-left">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
                <div class="float-left message-item ml-2">
                  I want to carry some goods amd i need you logistics company
                </div>
              </div>
              <div class="row right-message mb-3">
                <div class="ml-auto bg-primary text-white message-item mr-2">
                  You will need to fill agreement form stating the goods you want to carry after we finish talking about price 
                </div>
                <div class="img">
                  <img src="assets/images/users/Ellipse 7.jpg" class="w-100" />
                </div>
              </div>
            </div>

            <div class="chat-form row">
              <div class="col-sm-3"></div>
              <div class="col-sm-6 bg-light">
                <form @submit.prevent="sendMessage" class="input-group mb-3 mt-3">
                  <input type="text" class="form-control" placeholder="Send a message" required>
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-primary border-0"><i class="fa fa-send"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="w-100" style="position:sticky;top:70px;">
              <div class="row p-3">
                <div class="img-lg float-left">
                  <img src="assets/images/users/man-1.png" class="w-100" alt="">
                </div>
                <div class="img-lg-info m-auto float-left">
                  <p class="m-0">Micheal Jones</p>
                  <small>Admin</small>
                </div>
              </div>
              <div class="row pl-3 pr-3 pb-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label for="find_user" class="input-group-text bg-white border-0"><i class="fa fa-search"></i></label>
                  </div>
                  <input type="search" id="find_user" class="form-control border-0 pl-0" style="box-shadow:none;" placeholder="Search">
                </div>
              </div>
              <!-- CHAT ITEMS -->
              <div class="row p-3">
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend rounded-circle" style="width:35px;height:35px;">
                    <img src="assets/images/users/man-1.png" class="w-100" alt="">
                  </div>
                  <div class="form-control ml-2 border-0">
                    <p class="m-0">Jack Jones</p>
                  </div>
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
.well-sm {
  font-size: small;
}
.chat-head {
  overflow: auto;
  position: sticky;
  top: 70px;
  background-color: #fff9e6;
}
.chat-head .img {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: auto;
}
.chat-head-info {
  float: left;
  width: calc(100% - 40px);
}
.message-item {
  width: calc(70% - 50px);
  padding: 5px 15px;
}
.left-message .message-item {
  background-color: #fff9e6;
  font-size: 16px;
}
.chat-form {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  right: 0;
}
.chat-form .form-control {
  border: none;
  background: #eee;
  box-shadow: 0 0 0!important;
}
.img-lg {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: auto;
}
.img-lg-info {
  width: calc(100% - 60px);
  padding-left: 15px;
}
</style>