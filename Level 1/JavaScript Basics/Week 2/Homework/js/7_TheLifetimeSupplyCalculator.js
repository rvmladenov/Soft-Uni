function calcSupply(age, maximumAge, foodPerDay) {
    var daysInYear = 365;

    var food = (maximumAge - age) * daysInYear * foodPerDay;
    return food + 'kg of chocolate would be enough until I am ' + maximumAge + ' years old.';
}

var inputs = [
    [38, 118, 0.5],
    [20, 87, 2],
    [16, 102, 1.1]
];
for (var i = 0; i < inputs.length; i++) {
    console.log(calcSupply.apply(this, inputs[i]));
}