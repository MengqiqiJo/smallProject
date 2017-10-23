Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  },
})

new Vue({
  el: '#file-list'
})