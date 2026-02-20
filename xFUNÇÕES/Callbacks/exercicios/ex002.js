function processarNumero(numero, operacao) {
    return operacao(numero);
}

function dobrar(n) {
    return n * 2;
}

const total = processarNumero(5, dobrar);
console.log(total);

/*
EXPLICAÇÃO:
Veja essa chamada:
    processarNumero(5, dobrar);

Quando isso ocorre, o JS faz mentalmente:
    "numero" recebe o valor "5"
    "operacao" recebe a função "dobrar"

Ou seja, dentro da função:
    function processarNumero(numero, operacao)

É como se virasse:
    numero = 5
    operacao = dobrar

Se "operacao" agora é igual a dobrar, então isso:
    operacao(numero);

É a mesma coisa que escrever:
    dobrar(5);

Porque:
    - "operacao" guarda a função
    - "numero" guarda o valor 5

    Não é que "operacao" "vira" função. Ele já está guardando uma função.
*/