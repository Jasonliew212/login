import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import OTPEnter from '@/views/OtpEnter.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'signUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
  },
  {
    path: '/OtpEnter',
    name: 'OTPEnter',
    component: OTPEnter
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
