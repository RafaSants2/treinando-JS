const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 30 }
];

produtos.forEach(function(produto){
    console.log("O produto", produto.nome, "custa R$" + produto.preco);
});