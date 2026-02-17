function calcularPrecoFinal(preco, desconto) {
  if (desconto < 0 || desconto > 100) {
    return "Desconto inválido";
  }

  const valorDesconto = (preco * desconto) / 100;
  const precoFinal = preco - valorDesconto;

  return precoFinal;
}

const resultado = calcularPrecoFinal(200, 1);
console.log(resultado);