var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(){
    for(var i = 0; i<10;i++){
        var tellen = arrayEen[i] + arrayTwee[i];
        document.write(arrayEen[i]+ '+' + arrayTwee[i] + '=' + tellen + '<br>');
    }
}

function aftrekken(){
    for(var i = 0; i<10;i++){
        var tellen = arrayTwee[i] - arrayEen[i];
        document.write(arrayEen[i]+ '-' + arrayTwee[i] + '=' + tellen + '<br>');
    }
}

function keer(){
    for(var i = 0; i<10;i++){
        var tellen = arrayEen[i] * arrayTwee[i];
        document.write(arrayEen[i]+ 'x' + arrayTwee[i] + '=' + tellen + '<br>');
    }
}

function delen(){
    for(var i = 0; i<10;i++){
        var tellen = arrayTwee[i] / arrayEen[i];
        document.write(arrayEen[i]+ ':' + arrayTwee[i] + '=' + tellen + '<br>');
    }
}



document.write('<h2>'+'dit zijn de rekensommen'+'</h2>' + '<hr>');
optellen();
document.write('<hr>');
aftrekken();
document.write('<hr>');
keer();
document.write('<hr>');
delen();
document.write('<hr>');