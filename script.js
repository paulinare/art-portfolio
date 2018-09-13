var navButton = document.getElementById("toggle-menu-btn");
var buttonIcon = document.getElementById("button-icon");

var toggleClassNavButton = function () {
  if (buttonIcon.classList.contains("fa-bars")) {
    buttonIcon.classList.remove("fa-bars");
    buttonIcon.classList.add("fa-times");  
    document.getElementById("painting-container").style.animation = "show 0.9s forwards";  
  }  
  else {
    buttonIcon.classList.remove("fa-times"); 
    buttonIcon.classList.add("fa-bars"); 
    document.getElementById("painting-container").style.animation = "hide 0.7s forwards";     
  }
}
 
navButton.onclick = function() { 
  toggleClassNavButton(); 
}   

var hideNavOnResize = function() {   
    var windowWidth = window.innerWidth;
    if(windowWidth >=  768 && buttonIcon.classList.contains("fa-times")) {          
        buttonIcon.classList.remove("fa-times"); 
        buttonIcon.classList.add("fa-bars");
        document.getElementById("painting-container").style.animation = "hide 0.7s forwards";  
        console.log(1); 
        document.getElementById("painting-container").style.float = "right"; 
        document.getElementById("painting-container").style.marginRight = "5vw";  
    }
    else if (windowWidth >=  768 && buttonIcon.classList.contains("fa-bars")){ 
        console.log("nielol");  
        document.getElementById("painting-container").style.float = "right";    
    }  
    else if (windowWidth <=  768){
        document.getElementById("painting-container").style.float = "none";    
    }   
}

window.addEventListener("resize", hideNavOnResize);   
