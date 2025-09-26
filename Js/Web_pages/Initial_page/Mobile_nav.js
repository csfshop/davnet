( function (){

  

var menuopenbtn = document.getElementById("sidebar_open")
var menulist = document.getElementById("sidebar_div")
var menuclosebtn = document.getElementById("sidebar_close")
var navblur = document.getElementById("sidebar_blur")
// var mobile_nav_link = document.querySelector(".mobile_nav_link")






menuopenbtn.onclick = ()=>{
    menulist.classList.add('sidebar_active')
    navblur.style.display = 'block'
    
}
menuclosebtn.onclick = ()=>{
    Navsidebarclose()
    
}
navblur.onclick = ()=>{
    Navsidebarclose()
    
}



function Navsidebarclose(){
    menulist.classList.remove('sidebar_active')
    navblur.style.display = 'none'
}

        
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mobile_nav');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});






})()