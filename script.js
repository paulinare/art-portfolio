var navButton = document.getElementById("toggle-menu-btn");
var buttonIcon = document.getElementById("button-icon");

var toggleClassNavButton = function() {
  if (buttonIcon.classList.contains("fa-bars")){
    buttonIcon.classList.remove("fa-bars");
    buttonIcon.classList.add("fa-times");  
    document.getElementById("painting-container").style.animation = "show 0.9s forwards"; 
    document.getElementById("hidden-nav").style.animation = "show 0.9s forwards"; 
  }  
  else {
    buttonIcon.classList.remove("fa-times");
    buttonIcon.classList.add("fa-bars"); 
    document.getElementById("painting-container").style.animation = "hide 0.7s forwards"; 
     document.getElementById("hidden-nav").style.animation = "hide 0.7s forwards";  
     
  }
}
 
navButton.onclick = function() { 
  toggleClassNavButton(); 
}   

