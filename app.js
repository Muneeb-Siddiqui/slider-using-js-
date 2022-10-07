let sliInd = 1;
showSlides(sliInd);

// Next/previous controls
function plusSlides(n) {
  showSlides(sliInd += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(sliInd = n);
}
function showSlides(n) {
  let i;
  let a = document.getElementsByClassName("mySlides");
  let b = document.getElementsByClassName("dot");
  if (n > a.length) {sliInd = 1}
  if (n < 1) {sliInd = a.length}
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  for (i = 0; i < b.length; i++) {
    b[i].className = b[i].className.replace(" active", "");
  }
  a[sliInd-1].style.display = "block";
  b[sliInd-1].className += " active";
}
