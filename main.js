let express = require ('express');
let app= express();
let port=8000;
  
app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.send('Bienvenue sur votre serveur !!');	
})
.get('/contact', function(req, res){
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.end('Nous ne sommes pas joignables pour le moment !');
})
.get('/display/:num', function (req, res) {
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.end('Vous tentez d’afficher le profil de '+req.params.num);
})
.use(function (req, res, next) {
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.status(404).send("Cette page n'existe pas.");
});

app.listen(port, function() {
		console.log('Le serveur écoute le port '+port);
});