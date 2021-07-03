import React from 'react';

class CurrentWeather extends React.Component {
    render() {
        return (
            <div>{this.props.condition}</div>
        )
    }

}

export default CurrentWeather;
