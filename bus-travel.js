function BusTravelCost() {
    let busTotal = 0;
    let costPerTrip = 0;

    function topUp(amount) {
        busTotal += amount;
    }
    function getBusTotal() {
        return busTotal;
    }

    function calculateCostPerTrip(destination, travelTime) {

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

        return costPerTrip;
    }
    function calculateTotalTrips(points, costPerTrip) {
        return Math.floor(points / costPerTrip);
    }

    function calculateReturnTrips(totalTrips, returnTrip) {
        if (returnTrip) {
            return Math.floor(totalTrips / 2);
        }
        return 0;
    }
    function calculateCostPerReturn(costPerTrip) {
        return costPerTrip * 2;
    }
    function calculatePrice(costPerTrip, travelTime) {
        if (travelTime === 'peak') {
            return costPerTrip;
        } else {
            return costPerTrip * 0.75;
        }
    }
    function errorMessage(destination, points){
        if (destination === 'Select start location') {
            alert('Please select a start location.');
            return;
          }
      
          if (isNaN(points) || points <= 0) {
            alert('Please enter points.');
            return;
          }
    }


    return {
        topUp,
        getBusTotal,
        calculateCostPerTrip,
        calculateTotalTrips,
        calculateReturnTrips,
        calculateCostPerReturn,
        calculatePrice,
        errorMessage
    }
}