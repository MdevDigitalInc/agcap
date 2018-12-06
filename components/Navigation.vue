<template lang="pug">
  .agc-main-nav
    .agc-main-nav-content
      .agc-main-nav-logo
        nuxt-link.agc-main-nav-logo-link(to="/" title="Home")
        img(src="/AGCAP_RGB_Secondary.svg" alt="AGCAP Logo")
      .agc-main-nav-hamburger(v-on:click="toggleMobile")
        i.fas.fa-bars
      .agc-main-nav-links
        nuxt-link.agc-main-nav-link.h5(to="/" title="Home")
          |Home
        nuxt-link.agc-main-nav-link.h5(to="/about" title="About")
          |About
        nuxt-link.agc-main-nav-link.h5(to="/approach" title="Approach")
          |Approach
        nuxt-link.agc-main-nav-link.h5(to="/contact" title="Contact")
          |Contact
    .agc-main-nav-graphic
</template>

<script>
export default {
  methods: {
    toggleMobile: function () {
      var y = document.getElementsByClassName("agc-mobile-nav");

      if (y[0].classList.contains("--hidden")) {
        y[0].classList.remove("--hidden");
        document.body.classList.add("u-freeze-scroll");
      } else {
        y[0].classList.add("--hidden");
        document.body.classList.remove("u-freeze-scroll");
      }
    }
  }
}
</script>
