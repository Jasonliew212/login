import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import OTPEnter from '@/views/OtpEnter.vue'

const routes = [
  {
    path: '/sign-in',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/otp-enter',
    name: 'OTPEnter',
    component: OTPEnter
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
