<template>
  <div>
    <table class="ranking table">
      <tbody>
        <tr v-for="(score, index) in sortedScores">
          <th>#&nbsp{{ index + 1 }}</th>
          <td>{{ score.name }}</td>
          <td>{{ numberWithCommas(score.score) }}</td>
          <td v-if="admin"><a @click="deleteItem(score['.key'])"> ❌ </a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import db from 'db';

  export default {
    name: 'rankings',
    props: ['admin'],
    firebase: {
      scores: db.ref('/scores'),
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
.ranking {
  font-size: 2em;
  font-family: 'Press Start 2P', cursive;
  color: white;
  background-color: black;
}

.table tr:hover {
  background-color: black;
}

.ranking th {
  color: white !important
}

.table td, .table th {
  border: none;
}
</style>
