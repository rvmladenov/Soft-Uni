$(function(){

    $("#btn").on('click', function(){

        var valClass = $("#class").val();
        var valColor = $("#color").val();

        $("." + valClass).css({backgroundColor: valColor});
    });

});