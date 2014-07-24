function isPrime(value) {
    var startNum = 2;
    var endNum = Math.ceil(Math.sqrt(value));
    for(; startNum <= endNum; startNum++) {
        if(value % startNum === 0) {
            return false;
        }
    }
    return true;
}

var inputs = [7, 254, 587];
for(var i = 0; i< inputs.length; i++) {
    console.log(isPrime(inputs[i]));
}