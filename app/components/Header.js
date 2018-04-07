import React, {Component} from 'react';
import Search from './Search';


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

	                onSubmitZipcode={function (city) {
	                    props.history.push({
	                        pathname: '/forecast',
	                        search: '?city=' + city
	                    })
	                }}
	                zipcode={123} />
	             </div>
            </header>
        )
		
	}
}


module.exports = Header;