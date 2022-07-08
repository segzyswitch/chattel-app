<template>
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
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>