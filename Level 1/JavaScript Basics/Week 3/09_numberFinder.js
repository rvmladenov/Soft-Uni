function findMostFreqNum(input) {
    var count = 1;
    var resCount = 1;
    var index = 0;
    for (var i = 0; i < input.length-1; i++) {
        for (var j = i+1; j < input.length; j++) {
            if(input[i]==input[j]){
                count++;
            }
        }
        if(count>resCount){
            resCount=count;
            index=i;
        }
        count=1;
    }
    console.log(input[index]+" ("+resCount+" times)");
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);