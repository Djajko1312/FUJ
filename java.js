let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.querySelector(".navbar").style.display = "block";
  } else {
    document.querySelector(".navbar").style.display = "none";
  }
  prevScrollpos = currentScrollpos;
}



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementById('nav-list')

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active')
})



//kodiranje

document.getElementById("myButton").onclick = function () {
  location.href = "schedule.html";
};