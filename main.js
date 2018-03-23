



//hover
var e = document.getElementbyId('parent');
e.onmouseover = function () {
  document.getElementbyId('popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementbyId('popup').style.display = 'none';
}




//SLIDESHOW
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex +=n);
}

function showDivs(n) {
  var = i;
  var x = document.getElementsbyClassName("carousel");
  if (n > x.length) {slideIndex = 1};
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
