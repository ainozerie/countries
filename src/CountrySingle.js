import React from "react";
import { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import number from 'easy-number-formatter';


function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
}

class CountrySingle extends Component {

    state = {
        country: {} ,
        weather: {},
        isLoading: true
    };

    componentDidMount() {
        Promise.all([getCountry(this.props.params.name), getWeather(this.props.params.name)])
        .then((result) => {
            this.setState({country: result[0].data, weather: result[1].data, isLoading: false});
            console.log(this.state.country[0]);
        });
    }
    render() {
        if (this.state.isLoading) {
            return ( <Loader /> )
        } else {
            return (
                <main>
                    <div className='weatherCard'>
                        <div className='single_head'>
                            <h1>{this.state.country[0].name}</h1>
                            <img src={this.state.country[0].flags.png} alt={this.state.country[0].name}/>
                        </div>
                        <div className='single_body'>
                            <p>The native name is <span> {this.state.country[0].nativeName} </span>.</p>
                            <p><span> {this.state.country[0].capital}</span> is the capital of this country.</p>
                            <p>Population of {this.state.country[0].nativeName} counts about <span> {number.formatNumber(this.state.country[0].population)}</span> people.</p>
                            <p>Currency(ies) used: {this.state.country[0].currencies.map((mon, i) => (<span key={i}>{mon.name} - {mon.symbol}</span>))}</p>
                            <p>Language(s) spoken: {this.state.country[0].languages.map((lang, i) => (<span key={i}>{lang.name} </span>))}</p>
                            <div className='weatherPicture'>
                            <img src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} alt='current weather'/>
                            <div className='weather_info'>
                                <p>Current weather: <span>{this.state.weather.weather[0].description}</span></p>
                                <p>Temperature is {Math.round(this.state.weather.main.temp - 273.15)} °C</p>
                                <p>Wind is {this.state.weather.wind.speed}</p>
                            </div>
                            </div>





                        </div>
                    </div>
                </main>
            );
        }
    };
};

export default CountrySingle;
