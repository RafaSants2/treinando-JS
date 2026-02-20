const numeros = [1, 2, 3];

numeros.forEach(function(numero) {
    console.log(numero);
});

/*
O que é forEach?
    forEach é um método de array que significa: “Para cada item desse array, execute uma função.”

Estrutura básica:
    array.forEach(function(item) {
    // código
    });

Tradução mental:
    "Para cada item do array, execute essa função."

EXPLICAÇÃO DO EXEMPLO ACIMA:
    1- Pega o primeiro elemento (1)
    2- Executa a função passando 1
    3- Pega o segundo elemento (2)
    4- Executa a função passando 2
    5- Pega o terceiro elemento (3)
    6- Executa a função passando 3

É basicamente um FOR automático.

A função que você passa é uma callback. Quem chama essa função não é você. É o próprio forEach.

Você entrega a lógica. Ele decide quando executar.

Equivalente em FOR tradicional
Isso:
    numeros.forEach(function(numero) {
        console.log(numero);
    });

É parecido com:
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

Parâmetros da callback
*/