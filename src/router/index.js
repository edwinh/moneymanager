import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Categories from '@/components/Categories'
import NewCategory from '@/components/NewCategory'
import ViewCategory from '@/components/ViewCategory'
import EditCategory from '@/components/EditCategory'
import UserCategories from '@/components/UserCategories'

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
      path: '/user-categories',
      name: 'UserCategories',
      component: UserCategories
    },
    {
      path: '/add-category',
      name: 'new-category',
      component: NewCategory
    },
    {
      path: '/:category_id',
      name: 'view-category',
      component: ViewCategory
    },
    {
      path: '/edit/:category_id',
      name: 'edit-category',
      component: EditCategory
    }
  ]
})
