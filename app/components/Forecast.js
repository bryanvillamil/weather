import React from 'react';
import api from '../utils/api';
import queryString from 'query-string';
import utils from '../utils/helpers';
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;
import DayItem from './DayItem';
import Back from './Back';

class Forecast extends React.Component {
    state = {
        forecastData: [],
        loading: true
    }
  	componentDidMount = () => {
	    this.city = queryString.parse(this.props.location.search).city;
	    this.makeRequest(this.city);
  	}
  	componentWillReceiveProps = (nextProps) => {
	    this.city = queryString.parse(nextProps.location.search).city;
	    this.makeRequest(this.city);
  	}
  	makeRequest = (city) => {
    	this.setState(function () {
      	return {
        	loading: true
      	}
    })

    api.getForecast(city).then(function (res) {
        this.setState(function () {
          	return {
	            loading: false,
	            forecastData: res,
          	}
        })
    }.bind(this))
}
handleClick = (city) => {
    city.city = this.city;
    this.props.history.push({
      	pathname: '/details/' + this.city,
      	state: city,
    })
}

render() {
    return this.state.loading === true
      ? <h1 className='forecast-header'> Loading </h1>
      : <div>
          	<h1 className='forecast-header'>{this.city}</h1>
          	<div className='forecast-container'>
            	{this.state.forecastData.list.map(function (listItem) {
              		return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
            	}, this)}
          	</div>
        </div>
    }
}


module.exports = Forecast;