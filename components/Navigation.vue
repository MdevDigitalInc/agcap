<template lang="pug">
  .agc-main-nav
    .agc-main-nav-content
      .agc-main-nav-logo
        a.agc-main-nav-logo-link(href="/" title="Return to home")
        img(src="/AGCAP_RGB_Secondary.svg" alt="AGCAP Logo")
      .agc-main-nav-hamburger(v-on:click="toggleMobile")
        i.fas.fa-bars
      .agc-main-nav-links
        nuxt-link.agc-main-nav-link.h5(to="/" title="Ag Capital Home Page")
          |Home
        nuxt-link.agc-main-nav-link.h5(to="/approach" title="Learn more about our approach")
          |Approach
        nuxt-link.agc-main-nav-link.h5(to="/about" title="Read about our story")
          |About Us
        nuxt-link.agc-main-nav-link.h5(to="/contact" title="Get in touch with Ag Capital")
          |Contact
    .agc-main-nav-graphic
      .agc-graphic
</template>

<script>
export default {
  // When mounted, fix the graphical element
  watch: {
    $route (to,from) {
      this.animateNav();
    }
  },

  mounted: function() {
    this.animateNav();
  },

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
    },

    animateNav: function() {
      var links = $('.agc-main-nav-link')

      for ( var i=0; i <= (links.length - 1); i++) {
        if ( links[i].classList.contains('nuxt-link-exact-active') ) {
          var linkObject = links[i].getBoundingClientRect();
          console.log(linkObject);

          $('.agc-graphic').css({
            'left' : (linkObject.left - linkObject.width) + 'px'
          });
        }
      }
    }
  }
}
</script>
