import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactRouter from 'react-router-dom';

class Search extends Component {

	/* el estado de la propiedad search viene vacio */
    state = {
      	search: '',
  	}

  /* Guardamos el dato ingresado en una variable search */
  	UpdateZipcode = (e) => {
	    var zip = e.target.value;
	    this.setState(function () {
	      	return {
	        	search: zip
	      	}
	    });
  	}

  /* Buscamos el campo guardado en la variable search */
  	SubmitZipcode = () => {
    	this.props.onSubmitZipcode(this.state.search)

    	this.setState(function () {
	      	return {
	        	search: ''
	      	}
	    })
  	}
  	
  	render() {
	    return (
	      	<div
		        className='zipcode-container'
		        style={{flexDirection: this.props.direction}}> {/* Props default propiedad flex */}
		        <input
		          	className='form-control'
		          	onChange={this.UpdateZipcode}
		          	placeholder='St. George,  Utah '
	          		type='text'
		          	value={this.state.search} /> {/* la propiedad search que viene por defecto vacia y aqui se cambia */}

		        <button
		          	type='button'
		          	className='btn btn-success'
		          	onClick={this.SubmitZipcode}> {/* se activa funcion SubmitZipcode */}
		            Get Weather
		        </button>
	      	</div>
	    )
  	}
}


{/* PropDefault viene en columb+n y cuando lo llamemos podemos cambiarlo */}
Search.defaultProps = {
  	direction: 'column'
}

Search.propTypes = {
  	direction: PropTypes.string,
}



export default Search; {/* exportamos componente */}