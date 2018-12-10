<template lang="pug">
  .agc-main-nav
    .agc-main-nav-content
      .agc-main-nav-logo
        nuxt-link.agc-main-nav-logo-link(to="/" title="Return to home")
        img(src="/AGCAP_RGB_Secondary.svg" alt="AGCAP Logo")
      .agc-main-nav-hamburger(v-on:click="toggleMobile")
        i.fas.fa-bars
      .agc-main-nav-links
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/" title="Ag Capital Home Page")
          |Home
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/about" title="Read about our story")
          |About Us
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/approach" title="Learn more about our approach")
          |Approach
        nuxt-link.agc-main-nav-link.h5.u-bold(to="/contact" title="Get in touch with Ag Capital")
          |Contact
    .agc-main-nav-graphic
</template>

<script>
export default {
  mounted() {
    this.godPadding();
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
    godPadding: function () {
      var nav = document.getElementsByClassName("agc-main-nav");

      var olympus = document.getElementsByClassName("site-wrapper");

      console.log("Nav Height: " + nav[0].getBoundingClientRect().height);

      var amount = nav[0].getBoundingClientRect().height;

      // This isn't really working and its static soooo

      olympus[0].style.paddingTop = amount + 'px';
    }
  }
}
</script>
