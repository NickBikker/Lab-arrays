var i =prompt('hoeveel namen wilt u in de ');

var namen = [];

for(var a = 0; a<i; a++){
    var naam = prompt('welke naam wilt u toevoegen');
    namen.push(naam)
}
console.log(namen);
document.write(namen);