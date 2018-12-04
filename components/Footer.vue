<template lang="pug">
  footer.agc-footer
    .agc-footer-main
      .agc-footer-main-left
        .agc-footer-info
          .agc-footer-logo
          .agc-footer-blurb
            p.u-white
              |50 Clearview Drive<br>Tillsonburg, ON<br>N4G 4G8<br><br>519-842-7609<br>info@agcapitalcanada.com
        .agc-footer-contact
          h4.u-white
            |Grow With Us
          .agcap-title-line
          a.agcap-btn.--solid(href="/contact" tilte="Learn about who we are")
            |request an investor fact sheet
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
          a.u-white
            |return to top
    .agc-footer-bumper
      span
        |Copyright &copy; 2018 Ag Capital Canada
</template>
