var p = 3.141592653589793;
var r = [7, 1.5, 20];

function calcCircleArea(r) {
    return p*Math.pow(r, 2);
}

function calcAndShowCircleAreas() {
    for(var i=0; i<r.length; i++) {
        document.writeln("r = " + r[i] + "; area = " + calcCircleArea(r[i]) + "<br />");
    }
}

document.addEventListener("DOMContentLoaded", function() {
  calcAndShowCircleAreas();
});