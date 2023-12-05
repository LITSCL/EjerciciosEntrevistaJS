var palabra = "arenera";

var palabraArray = [];

for (var i = 0; i < palabra.length; i++) {
    palabraArray.push(palabra[i]);
}

var palindroma = true;
for (var i = 0; i < palabraArray.length; i++) {
    if (palabraArray[i] != palabraArray[palabraArray.length - 1 - i]) {
        palindroma = false;
        break;
    }
}

console.log(palindroma);