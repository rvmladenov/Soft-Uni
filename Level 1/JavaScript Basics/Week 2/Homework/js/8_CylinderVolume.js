function calcCylinderVol(radius, height) {
    return (Math.PI * radius * radius * height).toFixed(3);
}

var inputs = [
    [2, 4],
    [5, 8],
    [12, 3]
];
for (var i = 0; i < inputs.length; i++) {
    console.log(calcCylinderVol.apply(this, inputs[i]));
}