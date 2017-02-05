<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(score, index) in sortedScores">
          <th>{{ index + 1 }}</th>
          <td>{{ score.name }}</td>
          <td>{{ score.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import db from 'db';

  export default {
    name: 'rankings',
    firebase: {
      scores: db.ref('/scores'),
    },
    data() {
      return {
        scores: [],
      };
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
