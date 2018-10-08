<template>
  <div class="site__content">
    <h1 class="page-title">Work</h1>

    <div class="projects">
      <div class="project">
        <div class="project__name">Monarca Investments</div>
        <a href="http://monarcainvestments.com" rel="nofollow" class="project__link">monarcainvestments.com</a>
        <footer>Design &middot; Development &middot; WordPress</footer>
      </div>

      <div class="project">
        <div class="project__name">Real Capital</div>
        <a href="http://realcapital.io" rel="nofollow" class="project__link">realcapital.io</a>
        <footer>Design &middot; Development</footer>
      </div>

       <div class="project">
        <div class="project__name">Ample Hold</div>
        <a href="http://ampleholdwealth.com" rel="nofollow" class="project__link">ampleholdwealth.com</a>
        <footer>Design &middot; Development</footer>
      </div>

       <div class="project">
          <div class="project__name">Cocapital</div>
          <a href="http://cocapital.io" rel="nofollow" class="project__link">cocapital.io</a>
          <footer>Design &middot; Development &middot; WordPress</footer>
        </div>
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

<style lang="scss">
.site__content {
  max-width: 1000px;
  padding: 0 35px;
  margin: 0 auto 0;
}

@media (max-width: 990px) {
  .projects {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .project {
      margin-bottom: 25px !important;
      top: 0 !important;
    }
  }
}

.projects {
  display: flex;
  flex-wrap: wrap;
  // flex-grow: 1 0 20%;
  margin-top: 300px;
  .project {
    border: 2px solid #222;
    border-bottom: 4px solid #222;
    max-width: 420px;
    height: 420px;
    width: 100%;
    margin: 0 20px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    transition: background 0.35s ease-in;
    &:hover {
      background: #222;
      color: #fff;

      a {
        color: yellow;
      }
    }

    footer {
      display: flex;
      justify-content: flex-end;
      max-width: 230px;
      text-align: center;
      color: #aaa;
    }

    &__name {
      font-size: 26px;
      font-weight: 600;
    }

    &:nth-child(2n + 2) {
      position: relative;
      top: -150px;
    }
  }
}
</style>
