import {createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Brasil from '../views/Brasil.vue'
import jamaica from '../views/jamaica.vue'

const router = createRouter ({ 
  history: createWebHistory() ,
  routes : [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Brasil', component: Brasil },
    { path: '/jamaica', component: jamaica },
  ]
})

export default router