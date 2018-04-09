import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { browserHistory ,BrowserRouter, Route} from 'react-router-dom';

class Back extends Component {

  	render() {
	    return (
      		<a 
      			href="javascript:history.back();"
      			className="btn atras" >
                Back
      		</a>
	    )
  	}
}

export default Back; {/* exportamos componente */}