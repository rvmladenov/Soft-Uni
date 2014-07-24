function evenNumber(value) {
    return (value % 2 === 0) ? true : false;
}

var inputs = [3, 127, 588];
for(var i = 0; i< inputs.length; i++) {
    console.log(evenNumber(inputs[i]));
}