import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Categories from '@/components/Categories'
import NewCategories from '@/components/NewCategory'
import ViewCategories from '@/components/ViewCategory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/add-category',
      name: 'NewCategory',
      component: NewCategories
    },
    {
      path: '/view-category',
      name: 'ViewCategory',
      component: ViewCategories
    }
  ]
})
