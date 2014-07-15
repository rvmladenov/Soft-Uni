/** Utility function which returns the minutes with leading zeros(where needed) */
Date.prototype.getFullMinutes = function(minutes) {
    var minutes = this.getMinutes();
    return (minutes < 10) ? '0' + minutes : minutes;
}
var dt1 = new Date();
dt1.setHours("21", "34");
var dt2 = new Date();
dt2.setHours("09", "57");
var dt3 = new Date();
dt3.setHours("06", "00");
var dt4 = new Date();
dt4.setHours("23", "59");
var dts = [ dt1, dt2, dt3, dt4];

for(var i = 0; i< dts.length; i++) {
    console.log(dts[i].getHours() + ':' + dts[i].getFullMinutes());
}