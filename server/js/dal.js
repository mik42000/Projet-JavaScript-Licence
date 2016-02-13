
class DAL {
	
	constructor() {
		var liste = [
			{title: 'Malcolm', season: 3, episode: 15},
			{title: 'The Simpson', season: 23, episode: 6},
			{title: 'American Dad', season: 5, episode: 12},
			{title: 'The Middle', season: 4, episode: 11}
		];
		this.map = new Map();
		// Il faut commenter la boucle pour que les tests passent
		for(var ep in liste) {
			this.map.set(Math.random().toString(36).slice(2), liste[ep]);
		}
	}
	
	addEpisode(ep){
		var key = Math.random().toString(36).slice(2);
		this.map.set(key, ep);
		return key;	
	}
	
	removeEpisode(key) {
		if(this.map.has(key)) {
			this.map.delete(key);		
		}	
	}
	
	getEpisode(key) {
		var episode = this.map.get(key);
		if(episode !== undefined) {
			episode.id = key;
		}
		return episode;	
	} 
	
	getMap() {
		return this.map;	
	}

}

module.exports = DAL
