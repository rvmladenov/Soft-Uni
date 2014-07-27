function printNumbers(n){
    var numbers=[];
    for (var i = 1; i < n; i++) {
        if(i%4!==0 && i%5!==0){
        numbers.push(i);
        }
    }
    if(n<1){
        numbers.push('no');
    }
    console.log(numbers.join(", "));
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);
