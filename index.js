import ScrollerComponent from './src/components/Scroller.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('amoy-scroller', ScrollerComponent)
}

const AmoyScroller = {
  install: install,
  ScrollerComponent
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(AmoyScroller)
}

export {
    AmoyScroller
}
