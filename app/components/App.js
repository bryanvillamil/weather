import React, {Component} from 'react';
import Search from './Search';
import Header from './Header';
import Forecast from './Forecast';
import Detail from './Detail';
import error404 from './Error404';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                    <div className='container'>

                        <Header /> {/* Traemos el componente de Header */}

                        <Route exact path='/' render={(props) => {
                            return (
                                <div className='home-container'>
                                    <h2 className='title-header'>Enter a City and State</h2>

                                    {/* Aqui se llama el componente de Search */}
                                    <Search
                                        // prop default para cambiar propiedad
                                        direction='column'

                                        onSubmitZipcode={(city) => {
                                            // Funcion para forecast con la propiedad city 
                                            props.history.push({
                                                pathname: '/forecast',
                                                search: '?city=' + city
                                            })
                                        }}
                                        // zipcode={123} 
                                        />
                                </div>
                            )
                        }} />

                        <Route path='/forecast' component={Forecast} />

                        <Route path='/details/:city' component={Detail} />

                        <Route exact path='/error404' component={error404} />
                    </div>
            </BrowserRouter>
        )
    }
}

export default App;  {/* exportamos componente App al #app */}