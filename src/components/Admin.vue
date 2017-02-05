<template>
  <div>
    <h1 class="title">Admin View</h1>
    <h1 class="subtitle">DEBUG!</h6>
      <div class="control is-grouped">
        <p class="control">
          <a class="button" @click="addRandom">Add Random Name and Score</a>
        </p>
      </div>
      <h1 class="title">Rankings</h1>
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
        scores: [],
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
    },
  };
</script>
