function reverseString(input) {
    var reverse="";
    for (var i = input.length-1; i >=0; i--) {
       reverse+=input[i];
    }
    console.log(reverse)
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');
