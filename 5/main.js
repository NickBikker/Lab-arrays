
var a = prompt('voer een getal in');
var piramide = [];

for(var i = 1; i <= a; i++){
    piramide.push(i);
    document.write(piramide.join('')+'<br>');
}

document.getElementById('oke').innerHTML = 'array:' + piramide;