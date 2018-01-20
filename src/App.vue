<template>
  <div id="app">
    <section>
      <div class="container">
        <img class="logo" src="./assets/logo.jpg">
      </div>
    </section>
    <div class="section bottom">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';

export default {
  name: 'app',
};

</script>

<style >

  .logo {
    max-height: 25vh;
    margin: auto;
    display: block;
    border: solid 1px;
  }

  #app {
    background-color: gray;
    min-height: 100vh;
    background-image: url("./assets/background.png");
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
  }

  #app > div.section.bottom {
    background-color: rgba(0, 0, 0, 0)
  }

</style>
