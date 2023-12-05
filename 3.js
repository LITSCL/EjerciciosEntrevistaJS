var array = [5, 3, 7, 1, 9, 12];

var arrayOrdenado = array.sort(function(a, b) {
    return a - b;
});

var chico = arrayOrdenado[0];
var grande = arrayOrdenado[arrayOrdenado.length - 1];

console.log(`Chico: ${chico} | Grande: ${grande}`);