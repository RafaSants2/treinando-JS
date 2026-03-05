const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "eletronico" },
  { nome: "Mouse", preco: 80, categoria: "eletronico" },
  { nome: "Cadeira", preco: 450, categoria: "movel" },
  { nome: "Teclado", preco: 120, categoria: "eletronico" },
  { nome: "Mesa", preco: 900, categoria: "movel" }
];

const desconto = 0.10;
const filCategoria = produtos.filter(produto => produto.categoria === "eletronico").map(produto => {
    const redução = produto.preco * desconto
    return {
        nome: produto.nome,
        precoOriginal: produto.preco,
        precoComDesconto: produto.preco - redução
    }
})


console.log(filCategoria);

/*
VERSÃO SEM CADEAMENTO:
const filCategoria = produtos.filter(produto => {
    return produto.categoria === "eletronico" && produto.preco > 100;
});

const desconto = 0.10

const nomeEletronico = filCategoria.map(produto => {
    const reducao = produto.preco * desconto;

    return {
        nome: produto.nome,
        precoOriginal: produto.preco,
        precoComDesconto: produto.preco - reducao
    }
});
console.log(nomeEletronico)
*/