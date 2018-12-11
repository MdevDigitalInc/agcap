<template lang="pug">
  .agc-mobile-nav.--hidden
    .agc-mobile-nav-content
      .agc-mobile-nav-button(v-on:click="closeMobile")
        i.fas.fa-times
      .agc-mobile-nav-links
        nuxt-link.agc-mobile-nav-link.h5(to="/" title="Ag Capital Home Page")
          |Home
        nuxt-link.agc-mobile-nav-link.h5(to="/approach" title="Learn more about our approach")
          |Approach
        nuxt-link.agc-mobile-nav-link.h5(to="/about" title="Read about our story")
          |About Us
        nuxt-link.agc-mobile-nav-link.h5(to="/contact" title="Get in touch with Ag Capital")
          |Contact
      h4
        |Grow With Us
      .agcap-title-line
      a.agcap-btn.--solid(href="/contact" title="Learn about who we are")
        |request an investor fact sheet
    .agcap-mobile-nav-footer
      img.agc-footer-logo(src="/AGCAP_RGB_Secondary_White.svg" alt="Ag Capital Brand")
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
