import React, { useState } from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";


const Card = () => {

    const [city, setCity] = useState("");
    const [showCity, setShowCity] = useState(false)
    const [weatherStats, setWeatherStats] = useState(false)
    const [showError, setShowError] = useState(false)

    function handleChange (e) {
        setCity(e.target.value)
    }

    async function handleSubmit(e){
        setShowError(false)
        e.preventDefault();
        let resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec5c7380ad1c206f8903e05d34e299ad&units=imperial`,
        {method: 'GET'})
        if(resp.status === 404){
            setShowError(true)
            return 
        }
        
        let data = await resp.json();
        

        setWeatherStats(data)
        setShowCity(true)

        console.log(weatherStats);

        e.target.reset();
    }

    return (
        <>
            <div className="bg-primary cst-card m-auto" style={{width: '60%', height: '25rem', borderRadius: '5px'}}>
                <div className="card-heading card-heading-bg" style={{borderRadius: '5px'}}>
                    <Form showError={showError} onChange={handleChange} handleSubmit={handleSubmit} name={weatherStats.name} />
                </div>
                {weatherStats ? <WeatherDetails stats={weatherStats} show={showCity}/> : <h1 className="w-100 m-auto">Search for a city</h1>}
                    
            </div>
        </>
    )
}

export default Card;