
var api_url = 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular';

  var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56a6db7998msh79e284753227031p1b6cc5jsn3b5d1ced5855',
      'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
    }
  };

  fetch(api_url, options)
  .then((response) => {
  if(response.ok){
    return response.json();
  }
  else{
    throw new Error("NETWORK RESPONSE ERROR");
  }
  })

  .then((data) => {console.log(data)
    loadPopImage(data)
    showSlides(1)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function loadPopImage(d) {
  //var shoeimg = [];
  var container = document.getElementById('content');
  var child = document.getElementById('child');
  if(container !== null){
  for(let i = 0; i < d.length; i++)
  {
    var img = document.createElement('img');
  //shoeimg[i] = d[i].thumbnail;
  img.setAttribute('src', d[i].thumbnail);
   
  container.appendChild(img);

  }
}
var children = container.querySelectorAll('img');
let x = '';
//console.log(children);
  for(let i =0; i<d.length;i++)
  {
    x  = children[i];
  }
  child = x;
//console.log(child);
}
let slideIndex = 1
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}