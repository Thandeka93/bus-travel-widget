describe("The bus travel widget", function () {

    it("should allow a user to enter points of 50", function () {

        const busCost = BusTravelCost();

        busCost.topUp(50);

        assert.equal(50, busCost.getBusTotal());
    })

    
    it("should allow a user to enter points of 100", function () {

        const busCost = BusTravelCost();

        busCost.topUp(100);

        assert.equal(100, busCost.getBusTotal());
    })

    it("should allow a user to enter points of 150", function () {

        const busCost = BusTravelCost();

        busCost.topUp(150);

        assert.equal(150, busCost.getBusTotal());
    })

    it('should calculate the cost per trip based on destination and travel time (Peak hour or Off-peak)', function () {
        // Create an instance of the TravelCostCalculator
        const calculator = BusTravelCost();
  
        // Test case 1: Destination is 'khayelitsha' and travelTime is 'peak'
        const cost1 = calculator.calculateCostPerTrip('khayelitsha', 'peak');
        assert.equal(cost1, 50);
  
        // Test case 2: Destination is 'dunoon' and travelTime is 'off-peak'
        const cost2 = calculator.calculateCostPerTrip('dunoon', 'off-peak');
        assert.equal(cost2, 25);
  
        // Test case 3: Destination is 'mitchells_plain' and travelTime is 'peak'
        const cost3 = calculator.calculateCostPerTrip('mitchells_plain', 'peak');
        assert.equal(cost3, 37.5);
  
        // Test case 4: Destination is not found (default case)
        const cost4 = calculator.calculateCostPerTrip('invalid_destination', 'off-peak');
        assert.equal(cost4, 0);
      });
 
});