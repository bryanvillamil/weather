import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';


class Back extends Component {
	atras =() =>{
		if (this.props.location.pathname === '/error404') {
			this.props.history.push('/');
		}else {
			this.props.history.goBack();
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

export default withRouter(Back); {/* exportamos componente */}