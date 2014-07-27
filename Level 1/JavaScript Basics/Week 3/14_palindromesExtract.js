function findMostFreqWord(input) {
    var text = input.toLowerCase().split(/[\W]+/);
    var palindromes = [];
    for (var i = 0; i < text.length-1; i++) {
        if(text[i]==text[i].split("").reverse().join("")){
           palindromes.push(text[i])
        }
    }
    return palindromes.join(", ")
}
console.log(findMostFreqWord('There is a man, his name was Bob.'));