var DaysofWeek = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

console.log(DaysofWeek);

document.write('<h2>' + 'dagen van de week' + '</h2>');

for(var i=0; i < 7; i++){
    document.write(DaysofWeek[i]+'<br>')
};

document.write('<h2>' + 'Werkdagen' + '</h2>');

for(var i=0; i < 5; i++){
    document.write(DaysofWeek[i]+'<br>')
};

document.write('<h2>' + 'Weekend' + '</h2>');

for(var i=5; i < 7; i++){
    document.write(DaysofWeek[i]+'<br>')
};

document.write('<h2>' + 'Dagen Omgekeerd' + '</h2>');

for(var i=6; i >= 0; i--){
    document.write(DaysofWeek[i]+'<br>')
};

document.write('<h2>' + 'Weekend omgekeerd' + '</h2>');

for(var i=6; i > 4; i--){
    document.write(DaysofWeek[i]+'<br>')
};