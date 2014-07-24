function roundNumber(value) {
    console.log(Math.floor(value));
    console.log(Math.round(value));
}

var inputs = [22.7, 12.3, 58.7];

for(var i=0; i< inputs.length; i++) {
    roundNumber(inputs[i]);
}