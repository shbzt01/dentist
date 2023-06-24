import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f1fd20e = () => interopDefault(import('..\\pages\\choose-name.vue' /* webpackChunkName: "pages/choose-name" */))
const _4634ee5c = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _297b8b1c = () => interopDefault(import('..\\pages\\show-data.vue' /* webpackChunkName: "pages/show-data" */))
const _0ca8ebb9 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _e1414f3a = () => interopDefault(import('..\\pages\\upload-files.vue' /* webpackChunkName: "pages/upload-files" */))
const _6d951aca = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/dentist/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/choose-name",
    component: _5f1fd20e,
    name: "choose-name"
  }, {
    path: "/inspire",
    component: _4634ee5c,
    name: "inspire"
  }, {
    path: "/show-data",
    component: _297b8b1c,
    name: "show-data"
  }, {
    path: "/upload",
    component: _0ca8ebb9,
    name: "upload"
  }, {
    path: "/upload-files",
    component: _e1414f3a,
    name: "upload-files"
  }, {
    path: "/",
    component: _6d951aca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
