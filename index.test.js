const fuelExpense = require("./fuelExpense")

test('calculate gas expense per km.', () => {
    expect(fuelExpense.fuelExpense(100000, 'gas'))
})