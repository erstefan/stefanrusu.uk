<template>
  <div class="site__content">
    <h1 class="page-title">About me</h1>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  .site__content {
    max-width: 1000px;
    padding: 0 35px;
    margin: 0 auto 0;
  }
</style>
