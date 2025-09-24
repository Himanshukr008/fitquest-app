import React from "react";  
import './bmi.css'
import './bmi1'

const BMI = () =>{
    return(
        <>
        <h2>BMI Calculator : </h2>
        <hr/>
        <div className="bmi" id="BMI">
            <div className="input_taken" id="input">
                <form action="">
                    <label htmlFor="height">Enter your Height in(cm): </label>
                    <input type="text" id="height" placeholder="Enter your height(cm)" required />
                    <label htmlFor="weight">Enter your Weight in(kg): </label>
                    <input type="number" id="weight" placeholder="Enter your Weight (kg)" required />
                    <div id="output">

                    </div>
                </form>
                    <button id="bt">B.M.I</button>
            </div>
                <button id="btn">Calculate BMI</button>
                <button id="btnclose" className="btnc">Close</button>
                </div>
        </>
    )
}

export default BMI;