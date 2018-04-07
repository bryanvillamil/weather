import React, {Component} from 'react';
import Search from './Search';
import Header from './Header';
import Forecast from './Forecast';
import Detail from './Detail';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Route render={function (props) {
                        return (
                            <Header />
                        )
                    }} />

                    <Route exact path='/' render={function (props) {
                        return (
                            <div className='home-container'>
                                <h2 className='title-header'>Enter a City and State</h2>
                                <Search
                                    // prop default para cambiar propiedad
                                    direction='column'

                                    onSubmitZipcode={function (city) {
                                        props.history.push({
                                            pathname: '/forecast',
                                            search: '?city=' + city
                                        })
                                    }}
                                    zipcode={123} />
                            </div>
                        )
                    }} />

                    <Route path='/forecast' component={Forecast} />

                    <Route path='/details/:city' component={Detail} />
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;