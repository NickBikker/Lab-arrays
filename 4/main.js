var tafel = [2, 4, 6, 8];
var getal = [1,2,3,4,5,6,7,8,9,10];


document.write('<h2>' + 'Tafel van 2:' + '</h2>');

for(var i=0; i <= 9; i++){
    var uitkomst = getal[i] * tafel[0];
    document.write(getal[i] + "x" + tafel[0] + "=" + uitkomst + "<br>");
}

document.write('<h2>' + 'Tafel van 4:' + '</h2>');

for (var i = 0; i <= 9; i++) {
    var uitkomst = getal[i] * tafel[1];
    document.write(getal[i] + ' X ' + tafel[1] + ' = ' + uitkomst + '<br>');
}

document.write('<h2>' + 'Tafel van 6:' + '</h2>');

for (var i = 0; i <= 9; i++) {
    var uitkomst = getal[i] * tafel[2];
    document.write(getal[i] + ' X ' + tafel[2] + ' = ' + uitkomst + '<br>');
}

document.write('<h2>' + 'Tafel van 8:' + '</h2>');

for (var i = 0; i <= 9; i++) {
    var uitkomst = getal[i] * tafel[3];
    document.write(getal[i] + ' X ' + tafel[3] + ' = ' + uitkomst + '<br>');
}