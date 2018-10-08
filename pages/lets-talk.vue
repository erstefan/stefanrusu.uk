<template>
  <div class="page">
    <main :class="{ 'muie': formHasError}">
      <div class="site__content">
        <div v-if="errors.length > 0" class="errors" :style="{ backgroundImage: `url(${errorPatternImage})`}">
          <img src="~assets/images/error.svg" class="error__icon" alt="">
          <div class="error__item" v-for="error in errors">{{ error }}</div>
        </div>
        <div v-if="sent" class="errors" :style="{ backgroundImage: `url(${errorPatternImage})`}">
          <img src="~assets/images/success.svg" class="error__icon" alt="">
          <div class="error__item">{{ successMessage }}</div>
        </div>
        <div class="form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form__row">
              <input type="text" name="name" placeholder="Name" v-model="form.name">
              <input type="email" name="email" placeholder="Email" v-model="form.email">
            </div>

            <div class="form__row">
              <textarea name="message" id="message" placeholder="Your message" cols="30" rows="5" v-model="form.message"></textarea>
            </div>

            <div class="form__row">
              <button type="submit" class="submit">Send message</button>
            </div>
          </form>

          <div class="call">
            <div class="call__image">
              <img class="call-stefan" src="~assets/images/stefan-rusu.jpg" alt="">
            </div>
            <div class="call__info">
              <h3>More comfortable talking?</h3>
              <p>Schedule a 15 minute call. I will answer your questions and discuss the potential fit.</p>
            </div>
          </div>
          
          </div>
        </div>
    </main>

    <div class="errors-wrapper">
      <h1 class="page-title"><div>Let's start something awesome</div></h1>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import { error } from 'util'
import axios from 'axios'
import errorPatternImage from '~/assets/images/what-the-hex.png'

export default {
  components: {
    Header,
  },

  data() {
    return {
      errors: [],
      form: {
        name: '',
        email: '',
        message: '',
      },
      sent: false,
      successMessage: '',
      errorPatternImage,
    }
  },

  computed: {
    formHasError() {
      return this.errors.length > 0
    },
  },

  methods: {
    async handleSubmit() {
      this.validateForm()

      if (this.errors.length === 0) {
        await this.$axios
          .$post('/api/contact', { ...this.form })
          .then(res => {
            if (res.OK) {
              this.clearFormData()
              this.sent = true;
              this.successMessage = res.message;
            }
          })
          .catch(err => {
            let isOK = err.response.data.OK
            let errorMessage = err.response.data.message

            if (!isOK) {
              return this.errors.push(errorMessage)
            }
          })
      }
    },

    clearFormData() {
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    },

    validateForm() {
      this.errors = []
      const { name, email, message } = this.form

      if (!name || !email || !message) {
        this.errors.push('Please fill out the form correctly.')
        return
      }

      if (!name || name.length < 2)
        return this.errors.push('Name is too short.')
      if (!email) return this.errors.push('Please provide your best email')
      if (!message || message.length < 10)
        return this.errors.push('Message is too short.')
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
.page-title {
  font-size: 32px;
  text-align: right;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  margin-top: 30px;
  margin-left: 3%;

  div {
    color: #fff;
    transform: rotateZ(3.5deg);
    font-size: 46px;
    letter-spacing: -2px;
    text-shadow: -10px 0 #000;
  }
}

.page-title--light {
  color: #fff;
}

.contact-form {
  margin-top: 50px;
  margin-right: 50px;
  padding-right: 50px;
}

main {
  display: flex;
  flex-direction: column;
  padding-bottom: 120px;
  // overflow: hidden;
  background: #fff;
  position: relative;
  padding-top: 20px;
  top: 100px;
  transform: skewY(1.5deg);
}

.muie {
  background: #fff;
}
.errors-wrapper {
  display: none;
  background: #222;
  transform: skewY(-2deg) scaleX(-1);
  width: 100%;
  height: 30vh;
  position: absolute;
  top: 50px;
  right: 0;
  transition: background 0.35s ease-in;
  z-index: -1;
  display: flex;
  box-shadow: inset 0 10px 0 #000;
}

.errors {
  display: flex;
  padding: 30px 15px;
  margin-top: 30px;
  border: 1px solid #222;
  border-bottom: 4px solid #222;
  .error__item {
    font-size: 24px;
    font-weight: 700;
    color: #222;
  }

  .error__icon {
    max-width: 90px;
    width: 100%;
  }
}

.call {
  max-width: 450px;
  display: flex;
  align-items: center;
  .call__image {
    flex: 1;
  }

  .call__info {
    width: 70%;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
  }
  .call-stefan {
    max-width: 80px;
    width: 100%;
    border-radius: 40px;
  }
}

.site__content {
  max-width: 1200px;
  padding: 0 35px;
  margin: 0 auto 0;
  transform: skewY(-2deg);
}

.form-wrapper {
  display: flex;
}

.form__row {
  margin-bottom: 25px;

  input[type='text'],
  input[type='email'],
  textarea {
    min-width: 200px;
    border: 0;
    border-bottom: 1px solid #222;
    font-size: 16px;
    outline: 0;
    padding: 10px 0;
  }

  textarea {
    max-width: 400px;
    width: 100%;
  }
}

.submit {
  background: #222;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 15px 30px;
  display: inline-block;
  text-transform: lowercase;
  outline: 0;
  border: 0;
  cursor: pointer;
}
</style>
