<template>
  <div>
    <table>
      <tbody>
        <tr v-for="score in scores">
          <th>1</th>
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
  };
</script>
