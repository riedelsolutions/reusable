var nav = document.getElementById("nav");
var x = nav.offsetTop;

function scroll() {
  if (window.pageYOffset >= x) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }

}


window.onscroll = function() {
	scroll();
};

/*CSS

.sticky{
  position: fixed;
  top: 0;
  width: 100%;
}


*/