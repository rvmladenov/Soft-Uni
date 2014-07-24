function divisionBy3(value) {
    value = '' + value;
    var sumOfDigits = 0;
    for(var i = 0; i < value.length; i++) {
        sumOfDigits += parseInt(value[i]);
    }

    return (sumOfDigits % 3 === 0) ? 'the number is divided by 3 without remainder' : 'the number is not divided by 3 without remainder';
}

var inputs = [12, 188, 591];
for (var i = 0; i < inputs.length; i++) {
    console.log(divisionBy3(inputs[i]));
}