var DAL = require('./dal');
var url = require('url');

class EpisodeController {
	
	constructor() {
		this.dal = new DAL();
	}	
	
	getListe(request, response) {	
		if(this.dal.getMap().size == 0) {
			response.writeHead(204);		
		}
		else {
			var json = JSON.stringify([...this.dal.map.values()]);
			response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "*", "Access-Control-Allow-Credentials": "*"});
			console.log([...this.dal.map.values()]);
			response.write(json);			
		}
		response.end();
	}

	getEpisode(request, response) {
		var urlParsee = url.parse(request.url, true);
		var objQuery = urlParsee.query;
		if(objQuery.id !== undefined) {
			var episode = this.dal.getEpisode(objQuery.id);
			if(episode !== undefined) {
				var json = JSON.stringify(episode);
				
				response.writeHead(200, {"Content-Type": "application/json"});
				response.write(json);
				response.end();			
			}
		}
		response.writeHead(404);
		response.end();
	}

	postEpisode(request, response) {
		var body = '';
		request.on('data', function(data) {
			body += data; //creation chaine reçue à parser en JSON		
		});
		var dalTmp = this.dal;
		request.on('end', function() {
			var epObject = JSON.parse(body);
			if(epObject !== undefined) {
				var idEpisode = dalTmp.addEpisode(epObject); //ajout et recupération de la clé
				var episode = dalTmp.getEpisode(idEpisode); //récupère l'objet grâce à l'id
				var json = JSON.stringify(episode); //convertit objet en json pour renvoi
				response.writeHead(201, {"Content-Type": "application/json"});				
				response.write(json);
				response.end();
			}
		});
	}
	
}

module.exports = EpisodeController





