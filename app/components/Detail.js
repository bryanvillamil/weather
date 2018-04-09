import React from 'react';
import DayItem from './DayItem';
var convertTemp = require('../utils/helpers').convertTemp;
import Back from './Back';

class Detail extends React.Component {
    render() {
        var props = this.props.location.state;
        return (
            <div className="detail-item">
                <Back />
                <DayItem day={props}/>
                <div className='description-container'>
                    <h4 className="detail__title">{props.city}</h4>


                    <p><strong>{props.weather[0].description}</strong></p>
                    <p><strong>min temp: </strong> {convertTemp(props.temp.min)} Degrees</p>
                    <p><strong>max temp: </strong> {convertTemp(props.temp.max)} Degrees</p> 
                    <p><strong>humidity: </strong> {props.humidity}</p>
                </div>
            </div>
        )
    }
}

export default Detail;