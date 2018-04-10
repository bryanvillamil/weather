import React, {Component} from 'react';

// Accedemos a las propiedades de las rutas con (withrouter)
import { withRouter } from 'react-router-dom'; 


class Back extends Component {

	atras =() =>{
		// if el nombre de la localizacion es '/error404'
		if (this.props.location.pathname === '/error404') {
			this.props.history.push('/'); // lo envia a la pagina raiz (/)
		}else {
			this.props.history.goBack(); // si no lo envia una page atras
		}
	}

  	render() {
	    return (
      		<a 
      			className="btn atras"
      			onClick= {this.atras}>
                Back
      		</a>
	    )
  	}
}

export default withRouter(Back); {/* exportamos componente con withRouter */}