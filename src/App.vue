<template>
  <div id="app" class="full-container">
    <router-view />
  </div>
</template>

<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 16px;
    color: rgb(44, 62, 80);
  }
  body{
    background-color: #f9fcff;
    background-image: url('../src/assets/images/background.png');
  }

  #app {
    position: relative
  }

</style>
