var a = prompt('hoe groot moet de piramide worden');

var piramide = [];


for(var i = 0;i<a;i++){
    piramide.push(i);
}
console.log(piramide);
document.write('array: ' + piramide+'<br>'+'<br>');

for(var o =0;o<a;o++){
    document.write(piramide+'<br>');
    piramide.pop();
}