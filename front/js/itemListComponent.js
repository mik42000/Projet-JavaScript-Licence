import React from 'react'
import { render } from 'react-dom'

fetch('http://localhost:9312/', {
    method: 'get',
    mode: 'no-cors'
}).then(function(response) {
	console.log("passage0");
	return response.json();
	
}).then(function(json) {  //passe pas
	console.log("passage");
	console.log(json);
	
    //var listeEpisodes = JSON.parse(response.text());
    //console.log(listeEpisodes);
}).catch(function(err) {
	console.log(err);
});

var ItemListe = React.createClass({
  render: function() {
    return <tr>
    <td>{this.props.id}</td>
    <td>{this.props.serie}</td>
    <td>{this.props.season}</td>
    <td>{this.props.episode}</td>
    </tr>;
  }
});

render(<ItemListe id="frfgtr" serie="Malcolm" season="5" episode="15" />, document.querySelector('#tabEpisodes tbody'));

