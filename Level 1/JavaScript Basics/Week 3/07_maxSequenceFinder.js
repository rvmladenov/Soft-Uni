function findMaxSequence(arr) {
    var counter=1;
    var resetCounter = 1;
    var position = 0;
    var maxSequence = [];
    for (var i = 0; i < arr.length-1; i++) {
        if(arr[i]<arr[i+1]){
            counter++;
        }
        else {
            counter = 1;
        }
        if (counter>resetCounter) {
            position=i+1;
            resetCounter = counter;
        }
    }
    for (var i = resetCounter; i >0; i--) {
        maxSequence.push(arr[position]);
        position--;
    }
    maxSequence.sort(function(a,b){return a>b;})
    if(resetCounter==1)
        console.log("no");
    else
        return maxSequence;
}
console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));
