const numeros = [1, 2, 3, 4];

const dobrados = numeros.map(numero => {
  return numero * 2;
});

console.log(dobrados);

/*map: se o "forEach" é sobre EXECUTAR, o map é sobre TRANSFORMAR.

O que é map? percorre um array e cria um novo array com base no retorno da callback. Diferente do forEach, ele USA O QUE VOCÊ RETORNA.

estrutura básica:
    const novoArray = array.map(item => {
        return algo;
    });

Para cada item: 
    - Você devolve um valor
    - o map junta esses valores
    - e cria um novo array.

EXEMPLO:
    const numeros = [1, 2, 3, 4];

    const dobrados = numeros.map(numero => {
    return numero * 2;
    });

    console.log(dobrados);

Resultado: [2, 4, 6, 8]

Observe: 
    - O array original continua igual
    - um novo array foi criado
    - o return agora importa

Exemplo com objetos:
    const produtos = [
        { nome: "Camisa", preco: 50 },
        { nome: "Tênis", preco: 200 }
    ];

    const nomes = produtos.map(produto => {
        return produto.nome;
    });

Resultado: ["Camisa", "Tênis"]

Você transformou:
    Array de objetos em Array de STRINGS. Isso é transformação.

Diferença que é necessário dominar:
    forEach: Faça algo com cada item.

    map: transforme cada item em outra coisa.
*/