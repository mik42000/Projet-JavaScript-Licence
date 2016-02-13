import React from 'react'
import { render } from 'react-dom'

var AddForm = React.createClass({
  render: function() {
    return <form method="POST" action="">
    	<label>Série </label><input type="text" placeholder="Série" name="serie"/><br/>
    	<label>Saison </label><input type="text" placeholder="Saison" name="season"/><br/>
    	<label>Episode </label><input type="text" placeholder="Episode" name="episode"/><br/>
    </form>;
  }
});

render(<AddForm />, document.getElementById('formulaire'));



