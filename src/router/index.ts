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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
