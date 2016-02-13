//3 méthodes:
//handle(req, resp) -> dirige vers les bonnes actions selon le chemin et le verbe
//addGET(path, callback) -> ajouter chemin GET avec action correspondante
//addPOST(path, callback) -> ajouter chemin POST avec action correspondante

var url = require('url');

class Routeur {

	constructor() {
		this.mapGET = new Map();
		this.mapPOST = new Map();	
	}
	
	handle(request, response) {
		var path = url.parse(request.url).pathname;
		if(request.method == 'GET') {
			if(this.mapGET.has(path)) { //path représente la clé d'un élement dans la map et la valeur c'est la fonction du contrôleur
				this.mapGET.get(path)(request, response); //exécute la fonction
			} else {
				response.writeHead(404);
				response.end();			
			}
		}
		else if(request.method == 'POST') {
			if(this.mapPOST.has(path)) {
				this.mapPOST.get(path)(request, response);
			} else {
				response.writeHead(404);
				response.end();			
			}
		}
		else {
			response.writeHead(405);
			response.end();
		}
	}
	
	addGET(path, callback) {
		this.mapGET.set(path, callback);	
	}
	
	addPOST(path, callback) {
		this.mapPOST.set(path, callback);
	}	
	
}

module.exports = Routeur




