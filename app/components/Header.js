import React, {Component} from 'react';
import Search from './Search';
import { withRouter } from 'react-router-dom';


class Header extends Component {
	render(){
		var titulo = "Clever Title";
		return (
			<header className="header">
				<div className="left">
					<h1 className="header__titulo">{titulo}</h1>
				</div>
				<div className="right">
					<Search
		                // prop default para cambiar propiedad
		                direction='row'

		                onSubmitZipcode={(city) => {
		                	this.props.history.push({
		                        pathname: '/forecast',
		                        search: '?city=' + city
		                    })
		                }}
		                />
	             </div>
            </header>
        )
	}
}


export default withRouter(Header);