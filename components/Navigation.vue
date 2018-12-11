<template lang="pug">
  .agc-main-nav
    .agc-main-nav-content
      .agc-main-nav-logo
        a.agc-main-nav-logo-link(href="/" title="Return to home")
        img(src="/AGCAP_RGB_Secondary.svg" alt="AGCAP Logo")
      .agc-main-nav-hamburger(v-on:click="toggleMobile")
        i.fas.fa-bars
      .agc-main-nav-links
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/" title="Ag Capital Home Page")
          |Home
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/approach" title="Learn more about our approach")
          |Approach
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/about" title="Read about our story")
          |About Us
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/contact" title="Get in touch with Ag Capital")
          |Contact
    .agc-main-nav-graphic
      .agc-graphic
</template>

<script>
export default {
  // When mounted, fix the graphical element
  watch: {
    $route (to,from) {
      var callback = this.animateNav;
      setTimeout(function() {
        callback();
      },50);
    }
  },

  mounted: function() {
    // Resize timer to debounce scroll
    let resizeTimer;
    let navTimer;
    let resizeTime = 50;
    // Initialize nav padding
    this.godPadding();
    this.animateNav();

    $(window).resize(() => {
      clearTimeout( resizeTimer );
      resizeTimer = setTimeout( this.godPadding, resizeTime );
      navTimer = setTimeout( this.animateNav, resizeTime );
    });
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
      // Get all main nav links
      var links = $('.agc-main-nav-link')
      var rail = $('.agc-main-nav-graphic')[0].getBoundingClientRect().top;

      // Step through the array and find the active one.
      for ( var i=0; i <= (links.length - 1); i++) {
        // Active link has nuxt-link-exact-active
        if ( links[i].classList.contains('nuxt-link-exact-active') ) {
          // Assign the active link to an object
          var pureObject = links[i];
          var linkObject = links[i].getBoundingClientRect();

          // Move the graphic to the desired X coordinate
          $('.agc-graphic').css({
            'left' : (linkObject.left + (linkObject.width * .5)) + 'px'
          });
        }
      }
    },

    godPadding: function () {
      var nav = document.getElementsByClassName("agc-main-nav");

      var olympus = document.getElementsByClassName("site-wrapper");

      var amount = nav[0].getBoundingClientRect().height;

      // This isn't really working and its static soooo

      olympus[0].style.paddingTop = amount + 'px';
    }
  }
}
</script>
