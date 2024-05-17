document.getElementById('calculateButton').addEventListener('click', calculateCarbon);

function calculateCarbon() {
    const transport = parseFloat(document.getElementById('transport').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const diet = document.getElementById('diet').value;

    if (isNaN(transport) || isNaN(electricity)) {
        alert("Please enter valid numbers for transportation and electricity consumption.");
        return;
    }

    // Approximate emissions factors
    const transportFactor = 0.12; // kg CO2 per km
    const electricityFactor = 0.475; // kg CO2 per kWh
    const dietFactors = {
        low: 2, // kg CO2 per day
        medium: 5,
        high: 8
    };

    const transportEmissions = transport * transportFactor;
    const electricityEmissions = electricity * electricityFactor;
    const dietEmissions = dietFactors[diet];

    const totalEmissions = (transportEmissions + electricityEmissions + dietEmissions).toFixed(2);

    document.getElementById('result').innerText = `Your daily carbon emissions are ${totalEmissions} kg CO2.`;
}
