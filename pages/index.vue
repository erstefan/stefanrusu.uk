<template>
  <div class="site">
    <div class="container">
      <div class="hero">
        <div class="hero__headings">
          <h3>Your business is great.</h3>
          <h3>It can do better.</h3>
          <h3>I can help.</h3>
        </div>
        <div class="hero__intro">
          <p>I help businesses develop their image and product.</p>
          <p>My focus is on beskope development and amazing UI/UX.</p>
        </div>

        <nuxt-link class="btn-cta" to="lets-talk">get in touch</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

.hero {
  &__headings {
    h3 {
      font-size: 82px;
      margin-top: 0;
      padding: 0;
      line-height: 87px;
      &:last-of-type {
        display: inline-block;
        position: relative;
      }
    }
  }

  &__intro {
    margin-top: 50px;
    p {
      color: #2c2c2c;
      font-family: 'Futura PT Book';
      font-size: 24px;
      font-weight: 300;
    }
  }
}

.btn-cta {
  background: #222;
  color: #fff;
  text-decoration: none;
  font-size: 23px;
  padding: 15px 30px;
  display: inline-block;
  margin-top: 40px;
}

.container {
  margin: 0 auto 0;
  max-width: 1000px;
  padding: 0 35px;
}

</style>
