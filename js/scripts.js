
function servWorker(){
      // Set up service worker
      if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('../service-worker.js', {scope: '.'});
      }
      // Easter Egg to get it full black
      // Awesome for OLED screens
      if (localStorage.getItem('isDeepBlack')) {
            document.body.classList.add('deepblack');
      }        
} 
