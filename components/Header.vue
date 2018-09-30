<template>
  <header>
    <Logo/>

    <nav class="site__menu">
      <nuxt-link to="process">the process</nuxt-link>
      <nuxt-link to="about">about me</nuxt-link>
      <nuxt-link to="contact">let's talk</nuxt-link>
    </nav>
  </header>
</template>

<script>
  import Logo from "./Logo";

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="scss">
  header {
    max-width: 1000px;
    margin: 35px auto 35px;
    padding: 0 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .site__menu {
    a {
      font-size: 23px;
      text-decoration: none;
      color: #2C2C2C;
      margin-right: 30px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
</style>
