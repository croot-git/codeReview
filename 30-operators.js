
    var meal_cost = parseFloat(mealCost);
    var tip_percent = parseInt(tipPercent);
    var tax_percent = parseInt(taxPercent);

    var total = Math.round(meal_cost * (100+tip_percent+tax_percent)/100)
    console.log('The total meal cost is '+total+' dollars.')
