var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.querySelector(".navbar").style.display = "block";
  } else {
    document.querySelector(".navbar").style.display = "none";
  }
  prevScrollpos = currentScrollpos;
}