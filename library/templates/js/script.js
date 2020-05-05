function openNav() {
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("main").style.paddingLeft = "27%";
  document.getElementById("header").style.paddingLeft = "27%";
  document.getElementById("sidebtn").setAttribute('onclick', 'closeNav()')
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.paddingLeft = "16px";
  document.getElementById("header").style.paddingLeft = "0";
  document.getElementById("sidebtn").setAttribute('onclick', 'openNav()')
}

function loadImages() {
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

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function loadAbout() {
  about = '<p class="key">About</p> \
  <p class="value">I\'m Abhi, a third-year graduate student from VJTI college pursuing a degree in Electronics. I \
          look at myself as a keen enthusiast in both hardware as well as software. \
        </p> \
        <p class="key">Certificates</p> \
        <div class="row"> \
          <section> \
            <div class="slideshow-container"> \
              <div class="mySlides fader"> \
                <div class="numbertext">1 / 3</div> \
                <img src="../static/katerina-pavlyuchkova-f8rG32kq9C4-unsplash.jpg" style="width:100%"> \
                <div class="text">Caption Text</div> \
              </div> \
              <div class="mySlides fader"> \
                <div class="numbertext">2 / 3</div> \
                <img src="../static/lucas-ludwig-y38_DBwBCFI-unsplash.jpg" style="width:100%"> \
                <div class="text">Caption Two</div> \
              </div> \
              <div class="mySlides fader"> \
                <div class="numbertext">3 / 3</div> \
                <img src="../static/katerina-pavlyuchkova-f8rG32kq9C4-unsplash.jpg" style="width:100%"> \
                <div class="text">Caption Three</div> \
              </div> \
              <a class="prev" onclick="plusSlides(-1)">&#10094;</a> \
              <a class="next" onclick="plusSlides(1)">&#10095;</a> \
            </div> \
            <br> \
            <div style="text-align:center"> \
              <span class="dot" onclick="currentSlide(1)"></span> \
              <span class="dot" onclick="currentSlide(2)"></span> \
              <span class="dot" onclick="currentSlide(3)"></span> \
            </div> \
          </section> \
        </div>'
  document.getElementById("main-row").innerHTML = about;

  showSlides(slideIndex);

}