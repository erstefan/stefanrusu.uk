<template>
  <div class="site__content">
    <h1 class="page-title"><span>Design</span> & Development</h1>

    <div class="approach">
      <h3>My approach</h3>
      <p>We will work together to identify the <strong>real problem</strong> your business is facing.</p>
      <!--<p>Given my 6+ years experience in the field and yours we’ll find the most optimal approach to solving it.</p>-->
      <!--<p>Resources needed, costs and timeframe are all taken into consideration from day one to come up with the result that best fits your business and vision.</p>-->
    </div>

    <div class="process" v-for="process in items">
      <div class="process__icon" :data-number="process.id">
        <img src="~/assets/images/process-icon.svg" alt="">
      </div>
      <div class="process__content">
        <h3>{{process.title}}</h3>
        <p>{{process.body}}</p>
      </div>
    </div>

    <div class="cta" :style="{ 'background-image': 'url(' + oval + ')' }">
      <h3>Sounds great, but
        I have some questions</h3>

      <nuxt-link to="lets-talk" class="btn-cta">contact me</nuxt-link>
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue';
  import oval from "~/assets/images/oval.svg";

  export default {
    components: {
      Header
    },

    data() {
      return {
        oval,
        items: [
          {
            id: 1,
            title: 'Research & Discovery',
            body: 'We sources needed, costs and timeframe are all taken into consideration from day one to come up with the result that best fits your business and vision.'
          },
          {
            id: 2,
            title: 'Wireframing & Prototyping',
            body: 'We sources needed, costs and timeframe are all taken into consideration from day one to come up with the result that best fits your business and vision.'
          },
          {
            id: 3,
            title: 'UI/UX',
            body: 'We sources needed, costs and timeframe are all taken into consideration from day one to come up with the result that best fits your business and vision.'
          },
          {
            id: 4,
            title: 'Development',
            body: 'We sources needed, costs and timeframe are all taken into consideration from day one to come up with the result that best fits your business and vision.'
          },
          {
            id: 5,
            title: 'Launch',
            body: 'We sources needed, costs and timeframe are all taken into consideration from day one to come up with the result that best fits your business and vision.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

  .cta {
    max-width: 1000px;
    width: 100%;
    height: 653px;
    background-repeat: no-repeat;
    margin-bottom: 150px;
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h3 {
      position: relative;
      top: -100px;
      max-width: 600px;
      font-size: 60px;
    }
  }
  .site__content {
    max-width: 1000px;
    padding: 0 35px;
    margin: 0 auto 0;
  }

  .page-title span {
    position: relative;
    &:before {
      content: '';
      width: 100%;
      height: 12px;
      // background-color: #FFDD00;
      position: absolute;
      bottom: 10px;
      left: 0;
      z-index: -1;
    }
  }

  .approach {
    margin-top: 130px;
    max-width: 700px;
    margin-bottom:150px;
    h3 {
      font-size: 36px;
      margin-bottom: 30px;
    }

    p {
      font-size: 30px;
      font-weight: 300;
    }
  }

  .process {
    display: flex;
    align-items: center;
    margin-bottom: 120px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &__icon {
      position: relative;
      max-width: 185px;
      width: 100%;
      margin-right: 50px;
      img {
        max-width: 185px;
        width: 100%;
      }
      &:before {
        content: attr(data-number);
        position: absolute;
        right: 25px;
        top: 35px;
        font-size: 70px;
        color: #fff;
        font-weight: 700;
      }
    }
    &__content {
      h3 {
        font-size: 51px;
        font-weight: 700;
      }
      p {
        font-size:30px;
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
  }
</style>
