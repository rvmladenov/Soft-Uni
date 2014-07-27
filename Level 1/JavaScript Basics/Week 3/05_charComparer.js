function compareChars(arr1, arr2){
    var equal = false;
    var laenght = arr1.length;
    for (var i = 0; i < laenght; i++) {
        if(arr1[i]==arr2[i])equal=true;
        else{
           equal=false;
           console.log("Not Equal");
           break;
        }
    }
    if(equal){
        console.log("Equal");
    }
}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
        ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']
);
compareChars(['3', '5', 'g', 'd'],
        ['5', '3', 'g', 'd']
);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
        ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']
);