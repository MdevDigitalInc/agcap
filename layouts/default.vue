<template lang="pug">
  .site-wrapper
    navigation
    nuxt
    footer-navigation
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    'navigation': Navigation,
    'footer-navigation': Footer
  }
}
</script>
