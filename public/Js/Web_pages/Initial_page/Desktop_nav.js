( function () {
  
if (window.scrollY === 0) {
  const navbar = document.getElementById('desktop_nav');

  navbar.classList.remove('scrolled');

  // const sub_nav = document.getElementById('sub_top_nav');
  // sub_nav.classList.remove('scrolled');
  
}



window.addEventListener('scroll', () => {
  const navbar = document.getElementById('desktop_nav');
  // const sub_nav = document.getElementById('sub_top_nav');
 
  if (window.scrollY > 0) {
    
    navbar.classList.add('scrolled');
    // sub_nav.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    // sub_nav.classList.remove('scrolled');
  }
});
})()