const alunos = [
    { nome: "Rafa", nota: 7},
    { nome: "Ana", nota: 4},
    { nome: "Carlos", nota: 9},
    { nome: "Marina", nota: 5}
];

const aprovados = alunos.filter(aluno => {
    return aluno.nota >= 6;
});

console.log(aprovados); /* Ele manteve os objetos originais, só selecionou alguns */

/*
filter: com filter, é onde você começa a controlar dados, não só transformar.
    Se "map" significa: "Transforme todos os elementos"

    "filter" significa: "DEIXE PASSAR ALGUNS ELEMENTOS"

Pense assim:
    Imagine uma peneira. Você joga vários dados nela. Só passam aqueles que atendem uma condição. Isso é "filter".

ESTRUTURA BÁSICA:
    array.filter(function(elemento) {
        return condição;
    });

OU VERSÃO MODERNA:
    array.filter(elemento => condição);

EXEMPLO:
    const num = [1, 2, 3, 4, 5, 6];

    const pares = num.filter(numero => numero % 2 === 0);
    console.log(pares);

Com o exemplo acima, o que houve exatamente?

- Para cada número:
    Se a condição for "true", ele entra no NOVO ARRAY.
    Se for "false", ele é descartado

DIFERENÇA ENTRE "map" E "filter":
"map" -> retorna o Mesmo tamanho do array original.
"filter" -> Pode retornar menos elementos.

"map" NUNCA remove elementos.

Neste exemplo:
    const alunos = [
        { nome: "Rafa", nota: 7},
        { nome: "Ana", nota: 4},
        { nome: "Carlos", nota: 9},
        { nome: "Marina", nota: 5}
    ];

    const aprovados = alunos.filter(aluno => {
        return aluno.nota >= 6;
    });

O resultado retornado vai ser apenas os alunos com notas iguais ou maiores, sendo aprovados. Porém, se eu fizesse "return aluno.nota", ele retornaria dessa lista todos os alunos? Não exatamente.

Ele vai retornar todos CUJA NOTA SEJA UM VALOR TRUTHY (real).
Em JavaScript, valores falsy são:
    0
    ""
    null
    undefined
    NaN
    false

Então se por exemplo houvesse um aluno com nota 0, ele seria descartado, por ser considerado "false".

ENCADEAMENTO:
    const aprovados = alunos.filter(aluno => aluno.nota >= 7).map(aluno => aluno.nome);

    por que isso funciona? Encadeamento funciona porque o MÉTODO RETORNA UM VALOR.
    filter() retorna -> um novo array
    map() retorna -> um novo array
    silce() retorna -> um novo array

Então no exemplo acima, alunos.filter(...) devolve um array, e esse novo array recebe .map(...)

é como se fosse:
    const filtrado = alunos.filter(...);
    const transformado = filtrado.map(...);
*/