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

// creating function that will calculate price and number of trips
function tripCost() {
    var points = parseInt(pointsInput.value);
    var destination = destinationSelect.value;
    var travelTime = travelTimeSelect.value;
    var returnTrip = returnTripCheckbox.checked;

    var costPerTrip;
    var totalTrips;
    var returnTrips;
    var costPerReturn;
    var price;

    //conditional statements depending on the location, peak hours and off-peak hours
    switch (destination) {
        case 'khayelitsha':
            costPerTrip = 40;
            break;
        case 'dunoon':
            costPerTrip = 25;
            break;
        case 'mitchells_plain':
            costPerTrip = 30;
            break;
        default:
            costPerTrip = 0;
    }

    if (travelTime === 'peak') {
        costPerTrip += costPerTrip * 0.25;
    }

    totalTrips = Math.floor(points / costPerTrip);

    if (returnTrip) {
        returnTrips = Math.floor(totalTrips / 2);
        costPerReturn = costPerTrip * 2;
    }

    if (travelTime === 'peak') {
        price = costPerTrip;
    } else {
        price = costPerTrip * 0.75;
    }

    costPerTripSpan.innerHTML = "R" + costPerTrip.toFixed(2);
    totalTripsSpan.innerHTML = totalTrips;
    returnTripsSpan.innerHTML = returnTrips || '';
    costPerReturnSpan.innerHTML = "R" + costPerReturn.toFixed(2) ;
}

//event lister for the calculate button 
calculateButton.addEventListener('click', tripCost);
