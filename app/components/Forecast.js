import React,{Component} from 'react';
import api from '../utils/api';
import queryString from 'query-string';
import utils from '../utils/helpers';
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;
import DayItem from './DayItem';
import Back from './Back';

class Forecast extends Component {
    state = {
        forecastData: [],
        loading: true
    }
  	componentDidMount = () => {

        const {props: {location:{search}}} = this;

	    this.city = queryString.parse(search).city;

	    this.makeRequest(this.city);
  	}
  	componentWillReceiveProps = (nextProps) => {

        const { nextProps:
            {location: 
                {search}
            }
        } = this;

	    this.city = queryString.parse(search).city;
	    this.makeRequest(this.city);
  	}
  	makeRequest = (city) => {
    	this.setState(() => {
      	return {
        	loading: true
      	}
    })

    // traemos la respuesta de la api para verificar si hay error
    api.getForecast(city).then((res) => {
        // si la respuesta esta bien quita el loadin y trae el dato
        this.setState(() => {
          	return {
	            loading: false,
	            forecastData: res,
          	}
        })
    }).catch((error) => { // si hay error nos va a direccionar a 404
        this.props.history.push('/error404');
    })
}



handleClick = (city) => {
    city.city = this.city;
    this.props.history.push({
      	pathname: '/details/' + this.city,
      	state: city,
    })
}

render() {
    const {state:
        {forecastData:
            {list}
        }
    } = this;
    
    return this.state.loading === true
      ? <h3 className='forecast-header'> Loading </h3>
      : <section className="forescat-view">
      		<Back />

          	<h2 className='forecast-header'>{this.city}</h2>
          	<div className='forecast-container'>
            	{list.map(function (listItem) {
              		return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
            	}, this)}
          	</div>
        </section>
    }
}


export default Forecast;