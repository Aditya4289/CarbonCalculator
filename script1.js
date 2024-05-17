function calculateEnergyEfficiency() {
    const lighting = parseFloat(document.getElementById('lighting').value) || 0;
    const heating = parseFloat(document.getElementById('heating').value) || 0;
    const medicalEquipment = parseFloat(document.getElementById('medical-equipment').value) || 0;
    const others = parseFloat(document.getElementById('others').value) || 0;

    const totalConsumption = lighting + heating + medicalEquipment + others;

    document.getElementById('total-consumption').innerText = `Total Energy Consumption: ${totalConsumption} kWh per month`;

    const recommendations = [];

    if (lighting > 1000) {
        recommendations.push('Consider switching to LED lighting to reduce energy consumption.');
    }
    if (heating > 1000) {
        recommendations.push('Improve insulation and consider using energy-efficient heating systems.');
    }
    if (medicalEquipment > 1000) {
        recommendations.push('Regular maintenance of medical equipment can ensure they are running efficiently.');
    }
    if (totalConsumption > 4000) {
        recommendations.push('Explore renewable energy sources like solar panels to offset high energy consumption.');
    }

    const recommendationsList = document.getElementById('recommendations');
    recommendationsList.innerHTML = '';

    if (recommendations.length > 0) {
        recommendations.forEach(rec => {
            const listItem = document.createElement('li');
            listItem.textContent = rec;
            recommendationsList.appendChild(listItem);
        });
    } else {
        recommendationsList.textContent = 'Your energy consumption is within optimal range. Keep up the good work!';
    }
}
