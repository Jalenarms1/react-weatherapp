import React from "react";

const Form = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div className="wrap-input d-flex justify-content-between w-100 p-4">
                    <div className="wrap-input d-flex">
                        <input type='text' className="p-1" placeholder="Enter a city name..." onChange={props.onChange} name="city" />
                        <button className="btn btn-outline-warning mx-2">Submit</button>
                    </div>
                    <h4 className="text-warning">Current city: {props.name}</h4>
                </div>
            </form>


        </>
    )
}

export default Form;