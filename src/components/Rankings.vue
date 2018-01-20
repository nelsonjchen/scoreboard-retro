<template>
  <div>
    <table class="ranking table">
      <transition-group enter-active-class="animated flash" name="rankings" tag="tbody">
        <tr v-for="(score, index) in sortedScores" :key="score.name">
          <th><span class="text">#&nbsp;{{ index + 1 }}</span></th>
          <td class="name"><span class="text">{{ score.name }}</span></td>
          <td class="score"><span class="text">{{ numberWithCommas(score.score) }}</span></td>
          <td v-if="admin"><a @click="deleteItem(score['.key'])"> ❌ </a></td>
        </tr>
      </transition-group>
    </table>
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
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
    },
    computed: {
      sortedScores() {
        function compare(a, b) {
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
    },
  };

</script>

<style scoped>
  @font-face {
    font-family: 'WebFont';
    src:  url('../assets/font.ttf')  format('truetype');
  }

  .ranking {
    font-size: 3em;
    font-family: 'WebFont';
    color:	gold;
    background-color: #330000;
    border-color: gold;
    border: 3px;
    border-style: solid inset solid solid;
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
             -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgb(230, 206, 114) 35%, rgb(218, 171, 95) 45%, rgba(145,112,59,1) 30%, rgb(213, 192, 109) 100%);
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
</style>
