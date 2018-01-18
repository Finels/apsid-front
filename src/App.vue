<template>
  <div>
    <Hearder></Hearder>
    <Menu></Menu>
    <ContentPage></ContentPage>
    <Footer></Footer>
  </div>
</template>

<script>
  import Hearder from './components/base/Hearder.vue'
  import Menu from './components/base/Menu.vue'
  import ContentPage from './components/base/ContentPage.vue'
  import Footer from './components/base/Footer.vue'
  export default {
    components: {Hearder, Menu, ContentPage, Footer},
    data() {
      return {
        loginPage: false,
        contentPage: false,
        pageUrl: ''
      }
    },
    mounted: function () {
      this.pageUrl = location.hash
      this.setPage()
    },
    watch: {
      $route() {
        if (location.hash === '#/') {
          this.loginPage = true
          this.contentPage = false
        } else {
          this.loginPage = false
          this.contentPage = true
        }
      }
    },
    methods: {
      setPage() {
        if (location.hash === '#/') {
          this.loginPage = true
          this.contentPage = false
        } else {
          this.loginPage = false
          this.contentPage = true
        }
      },
      changePage() {
        location.href = '#/home'
      }
    }
  }
</script>

<style>
</style>
