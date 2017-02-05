<template>
  <div>
    <h1 class="title">Admin View</h1>
    <div class="control">
      <label class="label">Name</label>
      <p class="control">
        <input class="input" type="text" placeholder="Gamer McGamerface">
      </p>
      <label class="label">Score</label>
      <p class="control">
        <input class="input" type="number" placeholder="8888">
      </p>
      <p class="control">
        <a class="button" @click="addOrUpdateScore">Update or Add Score</a>
      </p>
    </div>
    <h1 class="title">Rankings Preview</h1>
    <rankings></rankings>
  </div>
</template>

<script>
  import db from 'db';
  import Rankings from 'components/Rankings';

  export default {
    name: 'admin',
    components: {
      rankings: Rankings,
    },
    firebase: {
      scores: db.ref('/scores'),
    },
    data() {
      return {
        name: '',
        score: '',
      };
    },
    methods: {
      addRandom() {
        this.$firebaseRefs.scores.push(
          {
            name: 'Rando',
            score: Math.floor(Math.random() * 20),
          },
        );
      },
      addOrUpdateScore() {
        // Check for existing key
        // Update if found
        // Add if not.
      },
    },
  };

</script>
