<template lang="pug">
  .agc-main-nav
    .agc-main-nav-content
      img.agc-main-nav-logo(src="/AGCAP_RGB_Secondary.svg" alt="AGCAP Logo")
      .agc-main-nav-links
        nuxt-link.agc-main-nav-link.h5(to="/")
          |Home
        nuxt-link.agc-main-nav-link.h5(to="/about")
          |About
        nuxt-link.agc-main-nav-link.h5(to="/approach")
          |Approach
        nuxt-link.agc-main-nav-link.h5(to="/contact")
          |Contact
    .agc-main-nav-graphic
</template>
