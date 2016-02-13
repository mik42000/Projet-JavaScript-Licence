
var Routeur = require('./router');
var EpisodeController = require('./controller');
var http = require('http');

function start(port){
	
	var routeur = new Routeur();
	var epController = new EpisodeController();
	
	//définition des routes de l'appli
	routeur.addGET('/', function(request, response) {
		epController.getListe(request, response);	
	}); //le manquant est l'action du contrôleur
	
	routeur.addGET('/episode', function(request, response) {
		epController.getEpisode(request, response);	
	}); // idem
	
	routeur.addPOST('/', function(request, response) {
		epController.postEpisode(request, response);	
	}); //idem
	
	//création serveur
	http.createServer(function(request, response) {
		routeur.handle(request, response);
	}).listen(9312);
	
}

exports.start = start