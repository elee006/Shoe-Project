
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
  })
  .catch((error) => console.error("FETCH ERROR:", error));



function loadPopImage(d) {
  var shoeimg = [];
  for(let i = 0; i < 7; i++)
  {
  
  shoeimg[i] = d[i].thumbnail
  
 
  }
  console.log(shoeimg);
  document.getElementById("myImg").src = shoeimg;
}