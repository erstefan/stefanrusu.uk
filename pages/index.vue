<template>
  <div class="site container">
    <div class="hero">
      <div class="hero__headings">
        <h3>Your business is great.</h3>
        <h3>It can do better.</h3>
        <h3>I can help</h3>
      </div>

      <div class="hero__intro">
        <p>I help businesses develop their image and product.</p>
        <p>My focus is on beskope development and amazing UI/UX.</p>
      </div>

      <nuxt-link class="btn-cta" to="process">see my process</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .hero {
    margin-top:70px;

    &__headings {
      h3 {
        font-size: 82px;
        margin-top:0;
        padding: 0;
        line-height: 87px;
      }
    }

    &__intro {
      margin-top:70px;
      p {
        color: #2C2C2C;
        font-size: 30px;
      }
    }
  }

  .btn-cta {
    background: #222;
    color: #fff;
    text-decoration: none;
    font-size: 23px;
    padding: 15px 47px;
    display: inline-block;
    margin-top: 70px;
  }
.container {
  margin: 0 auto 0;
  max-width: 1000px;
  padding: 0 35px;
}

</style>
