import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddContact from '../components/AddContact.vue'
import ContactPage from '../components/ContactPage.vue'
import ContactEdit from '../components/ContactEdit.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addcontact',
    name: 'addcontact',
    component: AddContact
  },
  {
    path: '/contact/:id',
    name: 'contactdetails',
    component: ContactPage,
  },
  {
    path: '/contact/editcontact/:id',
    name: 'editcontact',
    component: ContactEdit,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
