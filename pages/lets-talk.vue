<template>
  <div class="site__content">
    <h1 class="page-title">Let's talk</h1>

    <form>
      <div class="form__row">
        <input type="text" name="name" placeholder="Name" v-model="name">
        <input type="email" name="email" placeholder="Email" v-model="email">
      </div>

      <div class="form__row">
        <textarea name="message" id="message" cols="30" rows="10" v-model="message"></textarea>
      </div>

      <div class="form__row">
        <button type="submit" class="submit">Send message</button>
      </div>

    </form>
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
