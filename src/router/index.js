import {createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import router from '@/router'

const router = createRouter ({ history:createWebHistory() ,

routes : [
    { path: '/', component: Home },
    { path: '/About', component: About },
  ]
} )

createApp(App).mount('#app')

export default router