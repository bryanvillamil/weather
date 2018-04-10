import React from 'react';
import utils from '../utils/helpers';
var getDate = utils.getDate;

function DayItem (props) {
  	var date = getDate(props.day.dt);
  	var icon = props.day.weather[0].icon;
  	return (
	    <div onClick={props.onClick} className='dayContainer'>
	      	<img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
	      	<h3 className='subheader'>{date}</h3>
	    </div>
  	)
}

export default DayItem;