import React from "react";

const WeatherDetails = (props) => {



    return (
        <>
            {props.show && <div className="wrap-full w-75 m-auto my-5 d-flex" style={{height: '12rem'}}>
                <div className="wrap-det-left h-100 bg-warning">
                    <img style={{width: '4rem'}} src={`http://openweathermap.org/img/w/${props.stats.weather[0].icon}.png`} alt="sunny" />
                    <div className="left-flex d-flex flex-column w-100 justify-content-center align-items-center">
                        <h1 style={{fontSize: "3em"}} className="text-lg">{props.stats.main.temp}<span>&#176;</span></h1>
                        <div className="wrap-details w-100 d-flex justify-content-center justify-content-evenly">
                            <small>Low: {props.stats.main.temp_min}<span>&#176;</span></small>
                            <small>High: {props.stats.main.temp_max}<span>&#176;</span></small>
                        </div>
                    </div>
                </div>
                <div className="wrap-det-right h-100 d-flex flex-column justify-content-center p-3">
                    <div className="stat border-bottom w-75 py-1 my-2 text-warning">
                        <h5>Feels Like: {props.stats.main.feels_like}<span>&#176;</span></h5> 
                    </div>
                    <div className="stat border-bottom w-75 py-1 my-2 text-warning">
                        <h5>Humidity: {props.stats.main.humidity} </h5>
                    </div>
                    <div className="stat border-bottom w-75 py-1 my-2 text-warning">
                        <h5>Conditions: {props.stats.weather[0].description}</h5>
                    </div>
                    
                </div>
            </div>}
        </>
    )
}

export default WeatherDetails;