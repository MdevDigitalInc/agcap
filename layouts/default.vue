<template lang="pug">
  .site-wrapper
    navigation
    nuxt
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    'navigation': Navigation
  }
}
</script>