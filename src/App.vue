<template>
  <div id="app">
    <div class="left"><navbar></navbar></div
    ><div class="center"><router-view/></div
    ><div class="right"></div>
  </div>
</template>

<script>
export default {
  components: {
    navbar: () => import('@/views/components/Navbar')
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  position: relative;
  background-color: darkseagreen;
  overflow: hidden;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    width: 800px;
    position: absolute;
    top: 0;
    left: 0;
    .left {
      display: inline-block;
      width: 80px;
      height: 600px;
      vertical-align: top;
      background-color: #ffffff;
      padding-top: 50px;
    }
    .center {
      display: inline-block;
      width: 600px;
      height: 600px;
      vertical-align: top;
      background-color: #ffffff;
    }
    .right {
      display: inline-block;
      width: 120px;
      height: 600px;
      vertical-align: top;
      background-color: #ffffff;
    }
  }
}
</style>
