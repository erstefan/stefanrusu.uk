<template>
  <nuxt-link to="/" class="site__logo">
    <img src="~/assets/images/stefan-rusu-logo.svg" alt="">
  </nuxt-link>
</template>

<style lang="scss" scoped>

.site__logo {
  position: fixed;
  top: 0;
  background: #222;
  width: 100px;
  height: 90px;
  position: relative;
  // top: -30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding-bottom: 10px;
}
.nuxt-link-active {
      position: relative;
      &:before {
        content: '';
        width: 120%;
        height: 12px;
        // background-color: #FFDD00;
        position: absolute;
        top: 0px;
        // bottom: -12px;
        left: -10%;
        // z-index: -1;
      }
    }
</style>
