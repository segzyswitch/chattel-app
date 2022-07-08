<template>
  <title>Page not found!</title>
  <div style="height:100vh;" class="jumbotron bg-white text-primary m-0 d-flex">
    <div class="w-100 m-auto">
      <!-- <p class="text-center"><b style="font-size:80px;">404</b></p> -->
      <p class="text-center mb-4">
        <router-link class="navbar-brand bg-white pl-3" to="/company">
          <img src="assets/images/logo.png" class="" />
        </router-link>
      </p>
      <h2 class="text-center">Page not found!</h2>
      <p class="text-center">The requested page might have been moved or deleted.</p>
      <p class="text-center">
        <a href="javascript:void(0)"
          @click="this.$router.go(-1)"
          class="text-dark"><i class="fa fa-arrow-left"></i> Go back</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>