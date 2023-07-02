let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("container").style.top = "0";
  } else {
    document.getElementById("container").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

// THIS CODE IS FOR ANIMATING THE HEADER/NAVBAR ON SCROLL