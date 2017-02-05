<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>1</th>
          <td>Lolz</td>
          <td>7890</td>
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
