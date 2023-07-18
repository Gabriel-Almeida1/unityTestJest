function fuelExpense(distance, fuel){
    let gas = 16
    let ethanol = 11
    let distanceKm = distance / 1000

    if (distance < 0) {
        console.log("Distance can not be negative")
    } else if(fuel === 'gas'){
        return Math.round(distanceKm / gas)
    } else {
        return Math.round(distanceKm / ethanol)
    }
}

module.exports = {fuelExpense}