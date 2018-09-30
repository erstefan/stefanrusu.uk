<template>
  <header>
    <Logo/>

    <nav class="site__menu">
      <nuxt-link to="process">the process</nuxt-link>
      <nuxt-link to="about">about me</nuxt-link>
      <nuxt-link to="lets-talk">let's talk</nuxt-link>
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
      z-index: 9;
      &:last-of-type {
        margin-right: 0;
        position: relative;
        &:before {
          content: '';
          width: 120%;
          height: 12px;
          background-color: #eee;
          position: absolute;
          bottom: 0px;
          left: -10%;
          z-index: -1;
          transform: rotate(-0.5deg);
        }
      }

      &:nth-of-type(2) {
        position: relative;
        &:before {
          content: '';
          width: 120%;
          height: 12px;
          background-color: #70EEDA;
          position: absolute;
          bottom: 0px;
          left: -10%;
          z-index: -1;
          transform: rotate(-0.5deg);
        }
      }
      &:first-of-type {
        position: relative;
        &:before {
          content: '';
          width: 120%;
          height: 12px;
          background-color: #FFDD00;
          position: absolute;
          bottom: 0px;
          left: -10%;
          z-index: -1;
          transform: rotate(-0.5deg);
        }
      }

    }

    .nuxt-link-active {
      position: relative;
      &:before {
        content: '';
        width: 120%;
        height: 12px;
        background-color: #FFDD00;
        position: absolute;
        bottom: 0px;
        left: -10%;
        z-index: -1;
      }
    }
  }
</style>
