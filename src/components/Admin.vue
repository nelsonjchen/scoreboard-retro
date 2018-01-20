<template>
  <div class="admin">
    <h1 class="title">Admin View</h1>
    <div class="control">
      <label class="label">Name</label>
      <p class="control">
        <input ref="name" required v-model="name" class="input" type="text" placeholder="Gamer McGamerface">
      </p>
      <label class="label">Score</label>
      <p class="control">
        <input required v-model="score" class="input" type="number" placeholder="8888" @keyup.enter="addOrUpdate">
      </p>
      <label class="label">Contact Info</label>
      <p class="control">
        <input required v-model="contact" class="input" type="text" placeholder="Phone, Email, whatever, Twitter(?)" @keyup.enter="addOrUpdate">
      </p>
      <p class="control">
        <a :disabled="!validUpdate" class="button" @click="addOrUpdate">Update or Add Score/Contact</a>
      </p>
    </div>
    <!--<h2 class="subtitle">Debug</h2>
    <p>{{ scoreKey }} <a class="button" @click="addRandom">AddRandom</a></p>-->
    <h1 class="title">Rankings Preview</h1>
    <rankings admin="true"></rankings>
  </div>
</template>

<script>
  import { scoresRef } from 'db';
  import Rankings from 'components/Rankings';

  export default {
    name: 'admin',
    components: {
      rankings: Rankings,
    },
    firebase: {
      scores: scoresRef,
    },
    data() {
      return {
        name: '',
        contact: '',
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
      addOrUpdate() {
        if (!(this.validUpdate)) {
          return;
        }
        this.$firebaseRefs.scores.orderByChild('name').equalTo(this.name).limitToFirst(1).once('value', (snapshot) => {
          if (snapshot.val() === null) {
            this.$firebaseRefs.scores.push(
              {
                name: this.name,
                contact: this.contact,
                score: this.score,
              },
            );
          } else {
            snapshot.forEach((child) => {
              if (this.score !== null) {
                snapshot.ref.child(child.key).update({
                  score: this.score,
                });
              }
              if (this.contact !== '') {
                snapshot.ref.child(child.key).update({
                  contact: this.contact,
                });
              }
            });
          }
        });
        this.name = '';
        this.contact = '';
        this.score = null;

        this.$refs.name.focus();
      },
    },
    computed: {
      validUpdate() {
        return this.name !== '' && (this.score !== null || this.contact !== '');
      },
    },
  };
</script>

<style scoped>
  .admin {
    background-color: wheat;
  }
</style>
