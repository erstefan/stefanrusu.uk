<template>
  <header>
    <Logo/>

    <nav class="site__menu">
      <!-- <nuxt-link to="process">process</nuxt-link> -->
      <!-- <nuxt-link to="services">services</nuxt-link> -->
      <nuxt-link to="work">work</nuxt-link>
      <nuxt-link to="about">about</nuxt-link>
      <nuxt-link to="lets-talk">connect</nuxt-link>
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
    max-width: 1800px;
    position: relative;
    margin: 0 auto 100px;
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
      z-index: 9;
    }

    .nuxt-link-active {
      position: relative;
      &:before {
        content: '';
        width: 120%;
        height: 8px;
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        left: -10%;
        z-index: -1;
      }
    }
  }
</style>
