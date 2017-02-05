<template>
  <div>
    <h1 class="title">Admin View</h1>
    
    <h1 class="title">Rankings</h1>
    <rankings></rankings>
  </div>
</template>

<script>
  // import db from 'db';
  import Rankings from 'components/Rankings';

  export default {
    name: 'admin',
    components: {
      rankings: Rankings,
    },
    data() {
      return {
        scores: [],
      };
    },
  };
</script>
