import ScrollerComponent from './components/Scroller.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('scroller', ScrollerComponent)
}

const Scroller = {
  install: install,
  ScrollerComponent
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(Scroller)
}

export {
    Scroller
}
