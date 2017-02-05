<template>
  <div>
    <h1 class="title">Admin View</h1>
    <div class="control">
      <label class="label">Name</label>
      <p class="control">
        <input required v-model="name" class="input" type="text" placeholder="Gamer McGamerface">
      </p>
      <label class="label">Score</label>
      <p class="control">
        <input required v-model="score" class="input" type="number" placeholder="8888">
      </p>
      <p class="control">
        <a :disabled="!validScore" class="button" @click="addOrUpdateScore">Update or Add Score</a>
      </p>
    </div>
    <!--<h2 class="subtitle">Debug</h2>
    <p>{{ scoreKey }} <a class="button" @click="addRandom">AddRandom</a></p>-->
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
        score: null,
        scoreKey: 'Blank',
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
        this.$firebaseRefs.scores.orderByChild('name').equalTo(this.name).limitToFirst(1).once('value', (snapshot) => {
          if (snapshot.val() === null) {
            this.$firebaseRefs.scores.push(
              {
                name: this.name,
                score: this.score,
              },
            );
          } else {
            snapshot.forEach((child) => {
              snapshot.ref.child(child.key).update({
                score: this.score,
              });
            });
          }
        });
        this.name = '';
        this.score = null;
      },
    },
    computed: {
      validScore() {
        return this.name !== '' && this.score !== null;
      },
    },
  };
</script>
