import fetch from 'node-fetch';
//const http = require("http");
/*const hostname = "127.0.0.1";
const port = 8000;
const s = http.createServer(function(req, res){
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello World\n");
});
s.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56a6db7998msh79e284753227031p1b6cc5jsn3b5d1ced5855',
		'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
	}
};

fetch('https://sneaker-database-stockx.p.rapidapi.com/mostpopular', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  app.use(function (err, req, res, next) {
    console.error(err);
    res.set('Content-Type', 'text/html');
    res.status(500).send('<h1>Internal Server Error</h1>');
  });
  
