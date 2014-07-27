function displayProperties(){
    var property = [];
    for(var pr in document){
        property.push(pr);
    }
    property.sort();
    console.log(property.join('\n'));
}
displayProperties();