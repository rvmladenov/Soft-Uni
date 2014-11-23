$(function(){

    var json = [
        {
            "manufacturer":"BMW",
            "model":"E92 320i",
            "year":2011,
            "price":50000,
            "class":"Family"
        },
        {
            "manufacturer":"Porsche",
            "model":"Panamera",
            "year":2012,
            "price":100000,
            "class":"Sport"
        },
        {
            "manufacturer":"Peugeot",
            "model":"305",
            "year":1978,
            "price":1000,
            "class":"Family"
        }];

        var htmlToInclude = '<tr><th>Manufacturer</th><th>Model</th><th>Year</th><th>Price</th><th>Class</th></tr>';

        json.forEach(function(el){
            htmlToInclude += '<tr><td>' +
                el.manufacturer + '</td><td>' +
                el.model + '</td><td>' +
                el.year + '</td><td>' +
                el.price + '</td><td>' +
                el.class + '</td></tr>';
        });


        $("#table").html(htmlToInclude);
});