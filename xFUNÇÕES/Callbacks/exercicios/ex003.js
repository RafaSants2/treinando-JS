function processarNumero(numero, operacao) { 
    return operacao(numero); 
} 

function multiplicarPor3(n) { 
    return n * 3; 
} 

const total = processarNumero(7, multiplicarPor3); 
console.log(total);

/*
Primeiro, a função "processarNumero" é chamada nesta linha:
    const total = processarNumero(7, multiplicarPor3);

Nesse momento:
    - O valor "7" é atribuído ao parâmetro "numero".
    - A função "multiplicarPor3" é atribuída ao parâmetro "operacao".

Ou seja, dentro da função acontece isso em termos de memória:
    numero = 7
    operacao = multiplicarPor3

A função "processarNumero" então executa:
    return operacao(numero);

Como "operacao" está apontando para "multiplicarPor3", isso equivale a executar:
multiplicarPor3(7);

A função "multiplicarPor3" recebe "7" no parâmetro "n" e retorna:
    7 * 3

Esse valor retornado volta para "processarNumero", que também o retorna.

Então:
    const total = processarNumero(7, multiplicarPor3);

faz com que "total" receba o resultado da multiplicação.

Por fim:
console.log(total);

exibe esse valor no console.

Por que "processarNumero(5, multiplicarPor3());" é incorreto?

MOTIVO: se fizesse isso, você estaria chamando imediatamente o "multiplicarPor3()", e isso vira o resultado da função. Como ela espera um parâmetro e você não passou, isso já é um problema. Mas mesmo que você tivesse feito: "processarNumero(5, multiplicarPor3(5));", Ainda estaria errado como callback. E por quê? porque Callback exige que você passe a FUNÇÃO, não o RESULTADO da função.

Forma correta(passando a função):
    processarNumero(5, multiplicarPor3); -> Aqui você está passando a função inteira, e não o seu resultado.

Quando você coloca parênteses, você executa a função e passa o resultado, não a função. Callback exige passar a referência da função.
*/