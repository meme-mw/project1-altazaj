window.onload = function() {
    const navbar = document.querySelector('#nav');
    const navbarHeight = navbar.offsetHeight;
    
    window.addEventListener('scroll', function() {
          console.log("a"); 
          if (window.scrollY > (navbarHeight-130)) {
            navbar.classList.add('orderOrange');
            console.log("b"); 
          } else {
            navbar.classList.remove('orderOrange'); 
            console.log("c");  
          } 
      });
    }