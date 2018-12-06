<template lang="pug">
  .agc-mobile-nav.--hidden
    .agc-mobile-nav-content
      img.agc-mobile-nav-logo(src="/AGCAP_RGB_Secondary.svg" alt="AGCAP Logo")
      .agc-main-nav-graphic
      .agc-mobile-nav-button(v-on:click="closeMobile")
        i.fas.fa-times
      .agc-mobile-nav-links
        nuxt-link.agc-mobile-nav-link.h5(to="/" v-on:click="closeMobile")
          |Home
        nuxt-link.agc-mobile-nav-link.h5(to="/about" v-on:click="closeMobile")
          |About
        nuxt-link.agc-mobile-nav-link.h5(to="/approach" v-on:click="closeMobile")
          |Approach
        nuxt-link.agc-mobile-nav-link.h5(to="/contact" v-on:click="closeMobile")
          |Contact
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      this.closeMobile();
    }
  },
  methods: {
    closeMobile: function () {
      var x = document.getElementsByClassName("agc-mobile-nav");
      x[0].classList.add("--hidden");
      document.body.classList.remove("u-freeze-scroll");
    }
  }
}
</script>
