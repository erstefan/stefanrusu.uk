<template>
  <div>
    <Header />
    <nuxt/>
  </div>
</template>

<script>

  import Header from "../components/Header.vue";
  export default {
    components: {
      Header
    }
  }
</script>
<style>
html {
  font-family: 'Futura PT', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
  .page-title {
    margin-top: 90px;
    font-size: 82px;
    color: #2C2C2C;
  }
</style>
