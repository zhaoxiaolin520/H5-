<template>
  <div class="main">
    <Page @myEvent="getChildData" v-show="!isShow"></Page>
    <Main v-show="isShow"></Main>
  </div>
</template>

<script>
  import Page from './page/page.vue'
  import Main from './main/main.vue'
export default {
  data () {
    return {
        isShow: false
    }
  },
  components: {
      Page,
      Main
  },
    methods:{
        getChildData(data) {
            console.log(data)
            this.isShow = data;
        }
    }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    overflow: hidden;
  }
  #app {
    height: 100%;
  }
  .main {
    height: 100%;
  }
</style>
