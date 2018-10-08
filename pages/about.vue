<template>
<div class="page-about">
  <div class="container">
    <h1 class="page-title">About me</h1>
  </div>
  <div class="page-about-header">
    <div class="container">
    </div>

    <div class="page-about-content">
      <div class="container">
        <h3>Enthusiastic developer with a great affinity towards the world wide web.</h3>
        <p>For the last 5 years I worked on honing my skills and craft. Gained invaluable experience as a freelancer working with clients around the globe. I do enjoy collaboration environments as well as effectively working alone. Results-driven achiever, highly adaptable, eager to learn and grow.</p>
      </div>    
    </div>
  </div>

  <div class="skills-wrapper">
    <div class="container">
      <h3>Fullstack Development</h3>
      
      <div class="skills">
        <div class="skill">JavaScript, ReactJS, VueJS, Redux, Vuex</div>
        <div class="skill">PHP, MySQL, Laravel, Lumen</div>
        <div class="skill">NodeJS, MongoDB, Firebase</div>
      </div>

      <h3>User Interface Design</h3>
      <div class="skills">
        <div class="skill">Sketch, Photoshop</div>
      </div>
    </div>
  </div>

  <div class="contact">

  </div>
</div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped>
body {
  // height: 1000px;
  background: #222;
}
.page-about {
  height: 100%;
  min-height: 100%; 
}

.page-about-header {
  position: relative;
  padding: 1rem 0 3.5rem;
  margin-top: 60px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: skewY(5deg);
    z-index: -1;
  }
}
.container {
  max-width: 1000px;
  padding: 0 35px;
  margin: 0 auto 0;
  // height: 100vh;
}

.page-about-content {
  margin-top: 160px;
  // background: green;
  min-height: 350px;
  h3 {
    font-size: 40px;
    margin-bottom: 36px;
  }

  p {
    font-size: 24px;
  }
}

.skills-wrapper {
  width: 100%;
  height: 700px;
  // background-color: #222;
  // box-shadow: inset 0 15px 20px #000;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -2;

  &:before {
    content: '';
    position: absolute;
    width: 120%;
    height: 130%;
    top: -70px;
    left: 0;
    background: #ffe808;
    box-shadow: 0 20px 20px #000;
    z-index: -1;
  }
  h3 {
    margin-top: 70px;
    font-size: 42px;
    font-weight: 600;
    padding-bottom: 0;
    display: inline-block;
  }
}
.skills {
  .skill {
    display: flex;
    padding: 15px;
    background: #fff;
    margin-top: 20px;
    border: 1px solid #222;
    border-bottom: 4px solid #222;
    font-size: 24px;
    font-weight: 700;
    color: #222;
  }
}

.contact {
  height: 1000px;
}
</style>
