<template>
    <div class="wrapper">
    <div class="app"></div>
      <Header />
      <nuxt/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {
    Header,
  },
}
</script>
<style lang="scss">
@font-face {
	font-family: "Futura PT Book";
	src: url("~assets/fonts/FuturaPTBook.otf");
	font-style: normal;
	font-weight: normal;
}

@font-face {
	font-family: "Futura PT Heavy";
	src: url("~assets/fonts/FuturaPTHeavy.ttf"),
	url("~assets/fonts/FuturaPTHeavy.ttf") format("truetype");
	font-style: normal;
	font-weight: normal;
}
html {
  font-family: 'Futura PT Book', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Futura PT Heavy', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
  color: #2c2c2c;
}
.wrapper {
}
.app {
  border-top:2px solid #222;
  background: #fff;
  &:before {
    content: '';
    width: 100%;
    position: absolute;
    top: -15vh;
    left: 0;
    height: 65vh;
    z-index: -1;
    background: repeating-linear-gradient(
      50deg,
      #FFDD00,
      #EBCB00 1px,
      #FFDD00 150px,
      #EBCB00 1px
    );
    transform: skewY(5deg);
    box-shadow: inset 0 -15px 15px 0 rgba(0,0,0, .1);
  }
}

.nuxt-progress {
  background-color: #FFDD00 !important;
}
</style>
