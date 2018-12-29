
var Navigation = document.getElementById("Navigation_ID");
window.addEventListener('scroll', function () {
  var Scrolled = window.pageYOffset;
  if (Scrolled >= 200) {
    Navigation.style.display = "block";
    Navigation.style.animationName = "Navigation_Slide";
    Navigation.style.animationDuration = ".5s";
  }
  else {
    Navigation.style.display = "None";
  }
})
