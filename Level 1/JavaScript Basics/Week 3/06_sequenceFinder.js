function findMaxSequence(arr) {
    var counter=1;
    var resetCounter = 1;
    var position = 0;
    var maxSequence = [];
    for (var i = 0; i < arr.length-1; i++) {
        if(arr[i]===arr[i+1]){
            counter++;
        }
        else {
            counter = 1;
        }
        if (counter>=resetCounter) {
            position=i;
            resetCounter = counter;
        }
    }
    for (var i = 0; i < resetCounter; i++) {
        maxSequence.push(arr[position]);
    }
    return maxSequence;
}
console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
