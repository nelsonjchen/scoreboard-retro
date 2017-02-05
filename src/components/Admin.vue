<template>
  <div>
    <p>
      Admin
    </p>
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
  export default {
    name: 'admin',
    data() {
      return {
        contestants: [
          { name: 'Bob Newbie', score: 56 },
          { name: 'Betty Newbie', score: 2 },
          { name: 'Michael Bachelor', score: 7 },
        ],
      };
    },
  };
</script>
