const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "Carlos", nota: 4 },
  { nome: "Marina", nota: 9 },
  { nome: "João", nota: 5 }
];

const lista = alunos.map(situacaoAlunos => {
    if(situacaoAlunos.nota >= 6) {
        return {nome: situacaoAlunos.nome, nota: situacaoAlunos.nota, situacao: "Aprovado"};
    } else {
        return {nome: situacaoAlunos.nome, nota: situacaoAlunos.nota, situacao: "Reprovado"};
    }
});
console.log(lista);