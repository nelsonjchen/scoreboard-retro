<template>
  <div id="app">
    <section>
      <div class="container">
        <img class="logo" src="./assets/logo.png">
      </div>
    </section>
    <div class="section">
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

<style scoped>
  .logo {
    max-height: 40vh;
    margin: auto;
    display: block;
  }
</style>
