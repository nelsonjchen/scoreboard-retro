import Vue from 'vue';
import Router from 'vue-router';
import Admin from 'components/Admin';
import ColumnRankings from 'components/ColumnRankings';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ranking',
      component: ColumnRankings,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
});
