<template>
  <header class="p-0 w-100 pt-2 pb-2 d-sm-none">
    <router-link class="navbar-brand bg-white pl-3" to="/company"><img src="assets/images/logo.png" class="" /></router-link>
    <a href="#mySidebar" data-toggle="collapse" class="navbar-toggler p-3 text-primary float-right"><i class="fa fa-bars"></i></a>
  </header>
  <div class="col-sm-3 p-0 collapse navbar-collapse d-sm-block" id="mySidebar" style="z-index:9999;">
    <div class="w-100 sidenav col-sm-3 p-0">
      <div class="img-logo w-100 p-3 pt-5 pb-5 text-center d-none d-sm-block">
        <router-link to="/company"><img src="assets/images/logo.png" class="" /></router-link>
      </div>
      <div class="img-logo w-100 p-3 pb-5 d-sm-none">
        <router-link to="/company" class="navbar-brand"><img src="assets/images/logo.png" class="" /></router-link>
        <a href="#mySidebar" data-toggle="collapse" class="navbar-toggler pt-3 pl-3 pb-3   pr-0 text-primary float-right">
          <i class="fa fa-times"></i>
        </a>
      </div>
      <div class="w-100 p-3">
        <router-link to="/company" class="side-link"><i class="fa fa-home"></i> Dashboard</router-link>
        <router-link to="/company-wallet" class="side-link"><i class="fa fa-money"></i> Wallet</router-link>
        <router-link to="/company-message" class="side-link"><i class="fa fa-list"></i> Message</router-link>
      </div>
      <div class="w-100 p-3 bottom-link  text-center">
        <router-link to="/" class="text-danger d-block p-2">Logout</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidenav {
  position: fixed;
  top: 0;
  left: 0;
}
.bottom-link {
  position: absolute;
  bottom: 0;
}

.side-link {
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  border: 1px solid #000068;
  color: #aaa;
  border-radius: 10px;
  text-align: center;
}
.side-link.active {
  border: 1px solid #000068;
  color: #000068;
}
</style>