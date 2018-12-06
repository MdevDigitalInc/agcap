<template lang="pug">
  .site-wrapper
    navigation
    mobile-nav
    nuxt
    footer-navigation
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'
import Mobile from '~/components/Mobile-Navigation.vue'

export default {
  components: {
    'navigation': Navigation,
    'footer-navigation': Footer,
    'mobile-nav': Mobile
  }
}
</script>
