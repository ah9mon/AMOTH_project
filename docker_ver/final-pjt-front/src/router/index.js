import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import MovieDetail from '@/views/MovieDetailView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ArticleListView from '@/views/ArticleListView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'
import LoginView from '@/views/LoginView.vue'
import ArticleCreateView from '@/views/ArticleCreateView.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/detail/:id',
    name: 'movieDetail',
    component: MovieDetail,
    props: true
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: ProfileView,
    props: true
  },
  {
    path: '/article/:id',
    name: 'articleDetail',
    component: ArticleDetailView,
    props: true
  },
  {
    path: '/article',
    name: 'articleList',
    component: ArticleListView
  },
  {
    path: '/create',
    name: 'articleCreate',
    component: ArticleCreateView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const allowAllPages = ['login']
  const isAuthRequired = !allowAllPages.includes(to.name)
  let isLoggedIn = false
  if (store.state.token) {
    isLoggedIn = true
  }
  if (isAuthRequired === true && !isLoggedIn) {
    next({name: 'login'})
  } else if (isLoggedIn && !isAuthRequired) {
    next({name: 'search'})
  } else {
    next()
  }
})
export default router
