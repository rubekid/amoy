import ScrollerComponent from './src/components/Scroller.vue'
import InfiniteSpinner from './src/components/InfiniteSpinner.vue'
import RefreshSpinner from './src/components/RefreshSpinner.vue'

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
    AmoyScroller,
    InfiniteSpinner,
    RefreshSpinner
}
