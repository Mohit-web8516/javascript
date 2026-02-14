const form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter valid values for height ${height}`;
        return;
    }
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter valid values for weight ${weight}`;
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    if (bmi < 18.6) {
        results.innerHTML = `Your BMI is ${bmi.toFixed(2)} - Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `Your BMI is ${bmi.toFixed(2)} - Normal Range`;
    } else {
        results.innerHTML = `Your BMI is ${bmi.toFixed(2)} - Overweight`;
    }
});
