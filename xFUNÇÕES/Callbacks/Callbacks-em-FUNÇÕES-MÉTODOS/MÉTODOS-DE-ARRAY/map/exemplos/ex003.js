const funcionarios = [
  { nome: "Rafa", salario: 3000 },
  { nome: "Ana", salario: 4500 },
  { nome: "Carlos", salario: 2000 },
  { nome: "Marina", salario: 5000 }
];

const percentualAumento = 0.10;

const salarioAtual = funcionarios.map(function(salariosAtualizados){
    const aumento = salariosAtualizados.salario * percentualAumento;

    return { nome: salariosAtualizados.nome, salarioOriginal: salariosAtualizados.salario, salarioComAumento: salariosAtualizados.salario + aumento};
});

console.log(salarioAtual);