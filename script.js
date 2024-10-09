document.getElementById('predictionForm').onsubmit = function(event) {
    event.preventDefault();

    // Get the form values
    const weather = document.getElementById('weather').value;
    const time = document.getElementById('time').value;
    const roadCondition = document.getElementById('road_condition').value;
    const trafficDensity = document.getElementById('traffic_density').value;

    // Simulated prediction logic
    let riskLevel = "Low Risk of Accident";

    // Custom logic based on conditions (you can adjust this logic)
    if ((weather === "rainy" || weather === "snowy" || weather === "foggy") && 
        (roadCondition === "wet" || roadCondition === "icy" || roadCondition === "snow") && 
        trafficDensity > 70) {
        riskLevel = "High Risk of Accident";
    } else if ((weather === "rainy" || weather === "foggy") && trafficDensity > 50) {
        riskLevel = "Medium Risk of Accident";
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = "block";
    resultDiv.textContent = `Prediction: ${riskLevel}`;
};
