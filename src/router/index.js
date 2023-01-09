import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/answerid/:id",
    name: "answer-id",
    component: () =>
      import(
        /*webpackChunkName:"answer"*/ "../views/AnswerView.vue"
      ),
      props: (route) => {
        const id = Number(route.params.id);
        return isNaN(id) ? { id: 1 } : { id: id };

        
      },
      //  props: (route) => {
      //   const id = route.params.id;
      //   return id;
      // },


  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
