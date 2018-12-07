<template lang="pug">
  .agc-mobile-nav.--hidden
    .agc-mobile-nav-content
      .agc-mobile-nav-button(v-on:click="closeMobile")
        i.fas.fa-times
      .agc-mobile-nav-links
        nuxt-link.agc-mobile-nav-link.h5(to="/")
          |Home
        nuxt-link.agc-mobile-nav-link.h5(to="/about")
          |About
        nuxt-link.agc-mobile-nav-link.h5(to="/approach")
          |Approach
        nuxt-link.agc-mobile-nav-link.h5(to="/contact")
          |Contact
      h4
        |Grow With Us
      .agcap-title-line
      a.agcap-btn.--solid(href="/contact" tilte="Learn about who we are")
        |request an investor fact sheet
    .agcap-mobile-nav-footer
      img.agc-footer-logo(src="/AGCAP_RGB_Secondary_White.svg" alt="AGCAP Logo")
      p.--body-large.u-white
        |50 Clearview Drive<br>Tillsonburg, ON<br>N4G 4G8<br><br>519-842-7609<br>info@agcapitalcanada.com
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
