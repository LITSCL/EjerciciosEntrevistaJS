var array = [5, 3, 7, 1, 9, 12, 1, 3, 1];

var arrayOrdenado = array.sort(function(a, b) {
    return a - b;
});

var arrayLimpio = [];
for (var i = 0; i < arrayOrdenado.length; i++) {
    var actual = arrayOrdenado[i];
    var siguiente = arrayOrdenado[i + 1];

    if (actual != siguiente) {
        arrayLimpio.push(actual);
    }
}

console.log(arrayLimpio);
