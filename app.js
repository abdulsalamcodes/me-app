function popup() {
    var item = document.getElementById("mockup");
    console.log(item)
    item.classList.toggle("show");
  }

$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});