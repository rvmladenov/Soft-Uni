function convertKWtoHP(kWValue) {
    return (kWValue * 1.341).toFixed(2);
}

var values = [75, 150, 1000];

for(var i = 0; i< values.length; i++) {
    console.log(convertKWtoHP(values[i]));
}