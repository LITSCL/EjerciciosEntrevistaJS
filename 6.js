var codigo = "4921-AB";

var codigoSeparado = codigo.split("-");

var primeraParte = codigoSeparado[0];
var segundaParte = codigoSeparado[1];

var correcto = false;
if (primeraParte.length == 4) {
    if (segundaParte.length == 2) {
        if (Number(primeraParte)) {
            if (!Number(segundaParte)) {
                contador = 0;
                for (i = 0; i < segundaParte.length; i++) {
                    if (!Number(segundaParte[i])) {
                        contador++;
                    }
                }
                if (contador == 2) {
                    correcto = true;
                }
            }
        } 
    }
}

console.log(correcto);
