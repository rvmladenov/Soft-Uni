function findMostFreqWord(input) {
    var text = input.toLowerCase().split(/\W+/);
    text.sort();
    var wordCount = [];
    var maxCount = 0;
    var count;
    for (var i = 0; i < text.length; i++) {
        count = wordCount[text[i]];
        if(count==null){
            count=0;
        }
        if (count + 1 > maxCount) {
            maxCount = count + 1;
        }
        wordCount[text[i]]=count+1;
    }
    for (var key in wordCount) {
        if(wordCount[key]==maxCount){
            console.log(key + ' -> ' + wordCount[key]+" times");
        }
    }
}
findMostFreqWord('in the middle of the night');
console.log("\n");
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log("\n");
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');