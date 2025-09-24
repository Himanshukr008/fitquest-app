

setTimeout(() => {
    
        let input = document.getElementById("input")
        let height = document.getElementById("height")
        let weight = document.getElementById("weight")
        let bt = document.getElementById("bt")
        let output = document.getElementById("output")

        let btn = document.getElementById("btn")
        let btnclose = document.getElementById("btnclose")

        btn.addEventListener('click',() =>{
            input.style.display = "block"
        })
        btnclose.addEventListener('click',() =>{
            input.style.display = "none"
        })
        bt.addEventListener('click',calculateBMI)
        
        // let hv = number(height.value) 
        // let wv = weight.value 

        function calculateBMI() {
        // 1. Get the CURRENT values from the input fields
        // Use parseFloat to convert the text from the input into numbers
            const heightInCm = parseFloat(height.value);
            const weightInKg = parseFloat(weight.value);

            // 2. Check if the inputs are valid numbers
            if (isNaN(heightInCm) || isNaN(weightInKg) || heightInCm <= 0 || weightInKg <= 0) {
                output.innerHTML = "Please enter valid height and weight.";
                return; // Stop the function here
            }
            
            // 3. Convert height from centimeters to meters
            const heightInMeters = heightInCm / 100;
            
            // 4. Calculate the BMI
            const bmi = weightInKg / (heightInMeters * heightInMeters);
            console.log(bmi)
            
            // 5. Display the result, formatted to two decimal places
            // output.innerHTML = `Your BMI is: <strong>${bmi.toFixed(2)}</strong>`;
            if(bmi > 0 && bmi <= 18.5){
                output.innerHTML = `Your BMI is: <strong>${bmi.toFixed(2)}</strong> and You are Under Weight.`
            }else if(bmi > 18.5  && bmi <= 25 ){
                output.innerHTML = `Your BMI is: <strong>${bmi.toFixed(2)}</strong> and You are Normal.`
            }else if(bmi > 55  && bmi <= 30){
                output.innerHTML = `Your BMI is: <strong>${bmi.toFixed(2)}</strong> and You are over Weight.`
            }else{
                output.innerHTML = `Your BMI is: <strong>${bmi.toFixed(2)}</strong> and Your BMI falls under Obesity Range.`
            }
            }

        // output.innerHTML = `BMI : ${result}`

}, 1000);
