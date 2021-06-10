const app = new Vue({
  el: "#app",
  data: {
    isDarkMode: false
  },
  watch: {
    isDarkMode: function(mode) {
      const darkMode = mode ? 'dark' : 'light'
      localStorage.setItem('darkMode', darkMode)
      document.body.setAttribute('data-theme', darkMode)
      document.querySelector('table') && document.querySelector('table').setAttribute('class', `table table-${darkMode}`)
    }
  },
  methods: {
    initTheme() {
      const darkMode = localStorage.getItem('darkMode') || 'light'
      document.body.setAttribute('data-theme', darkMode)
      this.isDarkMode = darkMode === 'dark'
      document.querySelector('table') && document.querySelector('table').setAttribute('class', `table table-${darkMode}`)
    }   
  },
  created(){
    this.initTheme()
  }
})
