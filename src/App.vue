<template>
  <div id="app">
    <section>
      <div class="container logobox">
        <img class="logo" src="./assets/donkey_run.gif">
        <img class="logo" src="./assets/banana.gif">
        <img class="logo" src="./assets/game_logo.png">
        <img class="logo" src="./assets/tournament_logo.png">
        <img class="logo" src="./assets/banana.gif">
        <img class="logo" src="./assets/diddy_run.gif">
      </div>
    </section>
    <div class="section bottom">
      <div class="">
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

  .logobox {
    padding-top: 10px;
    align-items: center;
    display: flex;
    overflow: hidden;
  }

  .logo {
    max-height: 100px;
    margin: auto;
    display: inline;
    /* border: solid 1px; */

  }

  #app {
    /* background-color: gray; */
    min-height: 100vh;
    background-image: url("./assets/background.png"), linear-gradient(to bottom, #1e5799 0%,#060419 19%,#c9c9c9 33%,#e5e544 54%);
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,060419+19,c9c9c9+33,e5e5e5+100 */
  }

  #app > div.section.bottom {
    background-color: rgba(0, 0, 0, 0)
  }


  html {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  ::-webkit-scrollbar {
      height: 12px;
      width: 0px;
      background: goldenrod;
  }

  ::-webkit-scrollbar-thumb {
      background: gold;
      -webkit-border-radius: 1ex;
      -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
  }

  ::-webkit-scrollbar {
      width: 0px;
  }

  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }


</style>
