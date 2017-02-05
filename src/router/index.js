import Vue from 'vue';
import Router from 'vue-router';
import Rankings from 'components/Rankings';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ranking',
      component: Rankings,
    },
  ],
});
