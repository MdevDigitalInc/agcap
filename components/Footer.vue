<template lang="pug">
  footer.agc-footer
    .agc-footer-main
      .agc-footer-main-left
        .agc-footer-info
          img.agc-footer-logo(src="/AGCAP_RGB_Secondary_White.svg" alt="AGCAP Logo")
          .agc-footer-blurb
            p.u-white
              |50 Clearview Drive<br>Tillsonburg, ON<br>N4G 4G8<br><br>519-842-7609<br>info@agcapitalcanada.com
        .agc-footer-contact
          h4.u-white
            |Grow With Us
          .agcap-title-line
          a.agcap-btn.--solid(href="/contact" tilte="Learn about who we are")
            |request an investor fact sheet
        .agc-footer-linkbox
          .agc-footer-links
            nuxt-link.agc-footer-link.h5(to="/")
              |Home
            nuxt-link.agc-footer-link.h5(to="/approach")
              |Approach
            nuxt-link.agc-footer-link.h5(to="/about")
              |About Us
            nuxt-link.agc-footer-link.h5(to="/contact")
              |Contact
      .agc-footer-main-right
        .agc-footer-wormhole
          a.agc-top.u-white(v-on:click="toTop")
            |return to top&nbsp;&nbsp;
            i.fas.fa-arrow-alt-circle-right
    .agc-footer-bumper
      span
        |Copyright &copy; 2018 Ag Capital Canada
</template>

<script>
export default {
  methods: {
    toTop: function () {
      var scrollStep = -window.scrollY / (300 / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
      },15);
    }
  }
}
</script>
