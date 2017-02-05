<template>
  <div>
    <table class="ranking table is-striped">
      <tbody>
        <tr v-for="(score, index) in sortedScores">
          <th># {{ index + 1 }}</th>
          <td>{{ score.name }}</td>
          <td>{{ score.score }}</td>
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
}
</style>
