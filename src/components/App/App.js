import React from 'react';
import './App.css';
import {getCurrentWeather} from '../../api/OpenWeather';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentWeather: [],
        }
    }

    componentDidMount() {
        const current = getCurrentWeather();
        this.setState({currentWeather: current});
    }

    render() {
        return (
            <div className='App'>
                <CurrentWeather condition={this.state.currentWeather} />
            </div>
        )
    }
}

export default App;
