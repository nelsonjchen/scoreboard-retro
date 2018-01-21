<template>
  <div class="columns">
    <div class="top column">
      <table class="ranking table">
        <transition-group enter-active-class="animated flash" name="rankings" tag="tbody">
          <tr v-for="(score, index) in top" :key="score.name">
            <th><span class="text">#&nbsp;{{ index + 1 }}</span></th>
            <td class="name"><span class="text">{{ score.name }}</span></td>
            <td class="score"><span class="text">{{ numberWithCommas(score.score) }}</span></td>
          </tr>
        </transition-group>
      </table>
    </div>
    <div class="rest column">
      <table class="ranking table">
        <transition-group enter-active-class="animated flash" name="rankings" tag="tbody">
          <tr v-for="(score, index) in rest" :key="score.name">
            <th><span class="text">#&nbsp;{{ index + 1 + 3 }}</span></th>
            <td class="name"><span class="text">{{ score.name }}</span></td>
            <td class="score"><span class="text">{{ numberWithCommas(score.score) }}</span></td>
          </tr>
        </transition-group>
      </table>
    </div>

  </div>
</template>

<script>
  import { scoresRef } from 'db';
  import 'animate.css/animate.css';


  export default {
    name: 'rankings',
    props: ['admin'],
    firebase: {
      scores: scoresRef,
    },
    data() {
      return {
        scores: [],
      };
    },
    methods: {
      deleteItem(key) {
        this.$firebaseRefs.scores.child(key).remove();
      },
      numberWithCommas(x) {
        if (x === undefined) {
          return '?';
        }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
    },
    computed: {
      sortedScores() {
        function compare(a, b) {
          if (a.score === undefined) {
            return 1;
          }
          if (b.score === undefined) {
            return -1;
          }

          if (a.score < b.score) {
            return 1;
          }
          if (a.score > b.score) {
            return -1;
          }
          return 0;
        }
        return this.scores.concat().sort(compare);
      },
      top() {
        return this.sortedScores.slice(0, 3);
      },
      rest() {
        return this.sortedScores.slice(3);
      },
    },
  };

</script>

<style scoped>
  @font-face {
    font-family: 'WebFont';
    src:  url('../assets/font.ttf')  format('truetype');
  }
  .rest {

  }

  .ranking {
    font-size: 2em;
    font-family: 'WebFont';
    color:	goldenrod;
    background-color: #330000;
    border-color: gold;
    border-right-color: gold;
    border-width: 3px;
    border-style: solid inset solid solid;
  }

  .top .ranking {
    font-size: 3.7em;
  }

  .table tr:hover {
    background-color: #330000;
  }

  .ranking th {
    color: gold !important
  }

  .table td,
  .table th {
    border: none;
  }

  span.text {
    background:
             -webkit-linear-gradient(transparent, transparent),
             -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgb(230, 206, 114) 35%, rgb(218, 171, 95) 45%, rgb(186, 154, 76) 30%, rgb(213, 192, 109) 100%);
	  -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  td.name {
    width: 100%;
  }

  td.score {
    text-align: right;
  }

  .rankings-move {
    transition: transform 1s;
  }

  .contact {
    font-size: 12px;
    font-family: sans-serif;
    color: white;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    text-align: center;
  }
</style>
