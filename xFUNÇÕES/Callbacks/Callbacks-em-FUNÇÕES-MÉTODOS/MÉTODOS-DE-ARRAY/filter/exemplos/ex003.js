const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "eletronico" },
  { nome: "Mouse", preco: 80, categoria: "eletronico" },
  { nome: "Cadeira", preco: 450, categoria: "movel" },
  { nome: "Teclado", preco: 120, categoria: "eletronico" },
  { nome: "Mesa", preco: 900, categoria: "movel" }
];

const produdosEle = produtos.filter(produto => produto.categoria === "eletronico" && produto.preco > 100).map(produto => produto.nome);

console.log(produdosEle)

/* 
EXPLICAÇÃO:
Neste exemplo, usei dois "filters": o primeiro para filtrar o obj de categoria, sendo apenas "eletronico", e o segundo para filtrar os eletronicos acima de 100R$, após isso, usei o map() para que retornasse apenas os nomes dos produtos acima de 100R$ e da categoria "eletronico" 

VERSÃO SEM ENCADEAMENTO:

const filCategoria = produtos.filter(produto => {
    return produto.categoria === "eletronico";
})
const filAcimaDe100 = filCategoria.filter(produto => {
    return produto.preco > 100;
})
const nomeEletronico = filAcimaDe100.map(produto => {
    return produto.nome;
})
console.log(nomeEletronico)

*/