import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

const Movies = resolve => require(['./views/Movies'], resolve)
const Search = resolve => require(['./views/Search'], resolve)
const Movie = resolve => require(['./views/Movie'], resolve)
const scrollBehovior = (to, from, savedPosition) => { return { x: 0, y: 0 } }
const routes = [
  { path: '/', component: Movies },
  { path: '/movie/:id(\\d+)', component: Movie },
  { path: '/movie/:category?', component: Movies },
  { path: '/search', component: Search },
  { path: '*', redirect: '/' }
]
const router = new Router({ routes, scrollBehovior })
const app = new Vue({ router, render: h => h(App) }).$mount('#app')