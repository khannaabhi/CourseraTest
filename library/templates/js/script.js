function openNav() {
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("main").style.paddingLeft = "27%";
  document.getElementById("header").style.paddingLeft = "27%";
  document.getElementById("sidebtn").setAttribute('onclick','closeNav()')
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.paddingLeft= "16px";
  document.getElementById("header").style.paddingLeft= "0";
  document.getElementById("sidebtn").setAttribute('onclick','openNav()')
}

function loadImages () {
  imageNames = ["annie", "annie-spratt", "annie-spratt-joy", 
    "bharath", "diego", "jeremy-bishop", "josh-calabrese", 
    "killua2", "kurnaz", "laura-vinck", "mona-eendra"];
    
  imageLayout = '';
  

  for (var i = 0; i < imageNames.length; i++) {
    imageLayout += '<section class="col-lg-3 col-md-4 col-sm-6"><a class="image" target="_blank" href="../static/' +
    imageNames[i] + '.jpg"><img src="../static/' + 
    imageNames[i] + '.jpg" alt="Cinque Terre" width="180px" height="240px"> </a> <div class="desc">by ' + 
    imageNames[i] + '</div></section> ';
  }  
  document.getElementById("main-row").innerHTML = imageLayout;  
}

loadImages();