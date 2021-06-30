import React from 'react';
import './App.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <CurrentWeather />
            </div>
        )
    }
}

export default App;
