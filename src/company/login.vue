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
            <form method="get" action="/dashboard" class="reg-form">
              <div class="form-group">
                <label>Company Email</label>
                <input type="text" name="email_addr" class="form-control" required />
              </div> 
              <div class="form-group">
                <label>Password</label>
                <input type="text" name="paswrd" class="form-control" required />
              </div> 
              <div class="form-group text-right">
                <router-link class="text-primary" to="forgot-password">Forgot Password?</router-link>
              </div>
              <div class="form-group">
                <router-link to="/company" class="btn btn-primary btn-block">Login</router-link>
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