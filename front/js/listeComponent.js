import React from 'react'
import { render } from 'react-dom'

var listeEpisode;

/* Un item de la liste */
var ItemListe = React.createClass({
  render: function() {
    return <tr><td>{this.props.episode.id}</td><td>{this.props.episode.title}</td><td>{this.props.episode.season}</td><td>{this.props.episode.episode}</td></tr>;
  }
});

/* La liste */
var Liste = React.createClass({
  render: function() {
    return (<table id="tabEpisodes">
  		<thead>
  			<tr>
    			<td>Id</td>
    			<td>Serie</td> 
    			<td>Season</td>
    			<td>Episode</td>
    		</tr>
  		</thead>
  		<tbody>
			{this.props.listeEpisodes.map(function(episode) {
           		return <ItemListe episode={episode} />;
        	})}
  		</tbody>
  	</table>);
  }
});

//------------------//

function reqListener() {  
	listeEpisode = JSON.parse(this.responseText);  
	console.log(listeEpisode);

	render(<Liste listeEpisodes={listeEpisode} />, document.getElementById('listeEpisodes')); // créé la listComponent
}

function reqError(err) {  
  console.log('Fetch Error :-S', err);  
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;  
oReq.onerror = reqError;  
oReq.open('get', 'http://localhost:9312/', true);  
oReq.send();

