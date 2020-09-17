const simplificador = {
    calculo(entradaUm, entradaDois, divisor) {
        console.log(
            'Sua fração simplificada é: ' +
            entradaUm / divisor +
            '/' +
            entradaDois / divisor
        );
    },
    encontraMaior(entradaUm, entradaDois) {
        entradaUm.reverse();
        entradaDois.reverse();
        let cont = 0;
        let valor;

        for (let k = 0; k < entradaUm.length; k++) {
            if (entradaUm[k] == entradaDois[cont]) {
                valor = entradaUm[k];
                break;
            } else if (
                entradaUm[k] !== entradaDois[cont] &&
                k === entradaUm.length - 1
            ) {
                cont++;
                k = -1;
            }
        }
        this.calculo(entradaUm[0], entradaDois[0], valor);
    },
    todosPares(primeiroNumero, segundoNumero) {
        //para o primeiro numero
        let cont = 0;
        let resultadosPrimeiroNumero = [];
        let resultadosSegundoNumero = [];

        for (let k = 1; k <= primeiroNumero; k++) {
            if (primeiroNumero % k == 0) {
                resultadosPrimeiroNumero[cont] = k;
                cont++;
            }
        }
        //para o segundo numero
        let c = 0;
        for (let k = 1; k <= segundoNumero; k++) {
            if (segundoNumero % k == 0) {
                resultadosSegundoNumero[c] = k;
                c++;
            }
        }

        this.encontraMaior(resultadosPrimeiroNumero, resultadosSegundoNumero);
    },
    todosImpares(primeiroNumero, segundoNumero) {
        let resultadosPrimeiroNumero = [];
        let resultadosSegundoNumero = [];
        let cont = 0;
        for (let k = 0; k <= primeiroNumero; k++) {
            //console.log(um%k)
            if (primeiroNumero % k == 0) {
                resultadosPrimeiroNumero[cont] = k;
                cont++;
            }
        }
        cont = 0;
        for (let k = 0; k <= segundoNumero; k++) {
            if (segundoNumero % k == 0) {
                resultadosSegundoNumero[cont] = k;
                cont++;
            }
        }

        this.encontraMaior(resultadosPrimeiroNumero, resultadosSegundoNumero);
    },
    primeiroPar(primeiroNumero, segundoNumero) {
        let cont = 0;
        let resultadosPrimeiroNumero = [];
        let resultadosSegundoNumero = [];

        for (let k = 1; k <= primeiroNumero; k++) {
            if (primeiroNumero % k == 0) {
                resultadosPrimeiroNumero[cont] = k;
                cont++;
            }
        }

        cont = 0;
        for (let k = 0; k <= segundoNumero; k++) {
            if (segundoNumero % k == 0) {
                resultadosSegundoNumero[cont] = k;
                cont++;
            }
        }

        this.encontraMaior(resultadosPrimeiroNumero, resultadosSegundoNumero);
    },
    SegundoPar(primeiroNumero, segundoNumero) {
        let resultadosPrimeiroNumero = [];
        let resultadosSegundoNumero = [];

        let cont = 0;
        for (let k = 0; k <= primeiroNumero; k++) {
            //console.log(um%k)
            if (primeiroNumero % k == 0) {
                resultadosPrimeiroNumero[cont] = k;
                cont++;
            }
        }

        let c = 0;
        for (let k = 1; k <= segundoNumero; k++) {
            if (segundoNumero % k == 0) {
                resultadosSegundoNumero[c] = k;
                c++;
            }
        }
        this.encontraMaior(resultadosPrimeiroNumero, resultadosSegundoNumero);
    },
};

//Função que determina se os numeros são impares ou pares
//Function that determines whether the numbers are odd or even
function encaminhamento(primeiroNumero, segundoNumero) {
    if (primeiroNumero % 2 == 0 && segundoNumero % 2 == 0) {
        simplificador.todosPares(primeiroNumero, segundoNumero);
    } else if (primeiroNumero % 2 == 0 && segundoNumero % 2 > 0) {
        simplificador.primeiroPar(primeiroNumero, segundoNumero);
    } else if (primeiroNumero % 2 > 0 && segundoNumero % 2 == 0) {
        simplificador.SegundoPar(primeiroNumero, segundoNumero);
    } else if (primeiroNumero % 2 > 0 && segundoNumero % 2 > 0) {
        simplificador.todosImpares(primeiroNumero, segundoNumero);
    }
}

//encaminhamento(3, 6);

module.exports = encaminhamento;