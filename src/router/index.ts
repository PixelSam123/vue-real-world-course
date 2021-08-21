import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/:id',
    name: 'EventDetails',
    component: () => import('../views/EventDetails.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
