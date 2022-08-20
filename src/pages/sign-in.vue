<template>
  <title>Chattel | Sign in to your account</title>
  
  <div class="page-wrapper">
    <section class="login-section">
      <div class="well-auto">
        <router-link to="/" class="logo"><img src="assets/images/logo.png" /></router-link>
        <router-link class="big-btn" to="/sign-up">Sign up as a User</router-link>
        <router-link to="/register-company" class="big-btn">Sign up as a Company</router-link>
        <p style="color:#aaa;"><small>Already have an account?, <router-link to="/login" style="color:#ccc;">Login</router-link></small></p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.page-wrapper {
  background-image :url('../../public/assets/images/bikebg.png');
  background-size: cover;
  height: 100vh;
  overflow: auto;
}
</style>