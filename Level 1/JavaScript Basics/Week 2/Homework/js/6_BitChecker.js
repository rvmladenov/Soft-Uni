function bitChecker(value) {
    return ((value >> 3 & 1) == 1) ? true : false;
}

var inputs = [333, 425, 2567564754];
for (var i = 0; i < inputs.length; i++) {
    console.log(bitChecker(inputs[i]));
}