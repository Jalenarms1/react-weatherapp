import React, { useState } from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";


const Card = () => {

    const [city, setCity] = useState("");
    const [showCity, setShowCity] = useState(false)
    const [weatherStats, setWeatherStats] = useState({})

    function handleChange (e) {
        setCity(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        let resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec5c7380ad1c206f8903e05d34e299ad&units=imperial`,
        {method: 'GET'})
        let data = await resp.json();

        setWeatherStats(data)
        setShowCity(true)

        console.log(weatherStats);

        e.target.reset();
    }

    return (
        <>
            <div className="bg-primary cst-card m-auto" style={{width: '60%', height: '25rem'}}>
                <div className="card-heading card-heading-bg">
                    <Form onChange={handleChange} handleSubmit={handleSubmit} name={weatherStats.name} />
                </div>
                <WeatherDetails stats={weatherStats} show={showCity} />
                    
            </div>
        </>
    )
}

export default Card;