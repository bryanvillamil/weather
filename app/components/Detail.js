import React, {Component} from 'react';
import DayItem from './DayItem';
var convertTemp = require('../utils/helpers').convertTemp;
import Back from './Back';

class Detail extends Component {
    render() {

        const {props:{location:{state}}} = this;

        return (
            <div className="detail-item">
                <Back />
                <DayItem day={state}/>
                <div className='description-container'>
                    <h4 className="detail__title">{state.city}</h4>

                    <p><strong>{state.weather[0].description}</strong></p>
                    <p><strong>min temp: </strong> {`${convertTemp(state.temp.min)} °`} Degrees</p>
                    <p><strong>max temp: </strong> {`${convertTemp(state.temp.max)} °`} Degrees</p> 
                    <p><strong>humidity: </strong> {`${state.humidity} %`}</p>
                </div>
            </div>
        )
    }
}

export default Detail;