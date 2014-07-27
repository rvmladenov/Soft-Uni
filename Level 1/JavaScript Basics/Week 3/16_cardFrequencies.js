function findCardFrequency(input) {
    var cards = input.split(/\W+/);
    var cardsCount = {};
    var count;
    for(var key in cards){
        count=cardsCount[cards[key]];
        if(cards[key]=="")continue;
        if(count==null){
            count=0;
        }
        cardsCount[cards[key.toString()]]=count+1;
    }
    for (var key in cardsCount) {
        console.log(key + " -> " + ((cardsCount[key] / (cards.length-1)) * 100).toFixed(2) + "%");
    }
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log("\n");
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log("\n");
findCardFrequency('10♣ 10♥');
