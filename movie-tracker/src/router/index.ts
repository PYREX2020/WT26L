import { createRouter, createWebHistory } from 'vue-router'
import AddMovie from '@/pages/AddMovie.vue'
import Watchlist from '@/pages/Watchlist.vue'
import Watched from '@/pages/Watched.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/addmovie',
      name: 'AddMovie',
      component: AddMovie,
    },
    {
      path: '/watchlist',
      name: 'Watchlist',
      component: Watchlist,
    },
    {
      path: '/watched',
      name: 'Watched',
      component: Watched,
    },
  ],
})

export default router
