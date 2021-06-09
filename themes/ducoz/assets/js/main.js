const app = new Vue({
  el: "#app",
  data: {
    isDarkMode: false
  },
  watch: {
    isDarkMode: function(dark){
      if(dark){
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'dark');
      }else{
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('darkMode');
      }  
    }
  },
  methods: {
    initTheme() {
      const darkThemeSelected = localStorage.getItem('darkMode') !== null && localStorage.getItem('darkMode') === 'dark';
      this.isDarkMode = darkThemeSelected;
      darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
    }   
  },
  created(){
    this.initTheme();
    // Add table class
    document.querySelector('table').setAttribute('class', 'table')
  }
})
