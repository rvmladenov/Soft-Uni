function checkBrackets(input)  {
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
        if(input[i]=='('){
            counter++
        }
        else if(input[i]==')'){
            counter--;
        }
        if(counter<0)
            return "incorrect"
    }
    if(counter>0){
        return "incorrect";
    }
    else{
        return "correct";
    }
}
console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));