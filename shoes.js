
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
  //var shoeimg = [];
  var container = document.getElementById('content');
  if(container !== null){
  for(let i = 0; i < d.length; i++)
  {
    var img = document.createElement('img');
  //shoeimg[i] = d[i].thumbnail;
  img.setAttribute('src', d[i].thumbnail);
   
  container.appendChild(img);
  }
  }
  
  //console.log(container);
  
}