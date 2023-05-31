// DOM elements reference
const pointsInput = document.getElementById('points');
const destinationSelect = document.getElementById('destination');
const travelTimeSelect = document.getElementById('travel-time');
const returnTripCheckbox = document.getElementById('return-trip');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const costPerTripSpan = document.getElementById('cost-per-trip');
const totalTripsSpan = document.getElementById('total-trips');
const returnTripsSpan = document.getElementById('return-trips');
const costPerReturnSpan = document.getElementById('cost-per-return');

// Create an instance for a factory function
const busTravelCost = BusTravelCost();

// Creating function that will calculate price and number of trips
function tripCost() {
    const points = Number(pointsInput.value);
    const destination = destinationSelect.value;
    const travelTime = travelTimeSelect.value;
    const returnTrip = returnTripCheckbox.checked;

    // Using the factory function for error messages (points not entered and start location not selected)
    busTravelCost.errorMessage(destination, points);

    // Calculate the cost per trip using the factory function
    const costPerTrip = busTravelCost.calculateCostPerTrip(destination, travelTime);

    const totalTrips = busTravelCost.calculateTotalTrips(points, costPerTrip);

    const returnTrips = busTravelCost.calculateReturnTrips(totalTrips, returnTrip);

    const costPerReturn = busTravelCost.calculateCostPerReturn(costPerTrip);

    const price = busTravelCost.calculatePrice(costPerTrip, travelTime);

    costPerTripSpan.innerHTML = "R" + costPerTrip.toFixed(2);
    totalTripsSpan.innerHTML = totalTrips;
    returnTripsSpan.innerHTML = returnTrips || '';
    costPerReturnSpan.innerHTML = "R" + costPerReturn.toFixed(2);
}

// Add event listener to the calculate button
calculateButton.addEventListener('click', tripCost);
