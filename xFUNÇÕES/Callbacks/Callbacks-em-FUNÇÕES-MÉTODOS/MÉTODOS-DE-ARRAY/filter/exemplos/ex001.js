const alunos = [
  { nome: "Rafa", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Ana", nota: 9 },
  { nome: "Julia", nota: 6 },
  { nome: "Marcos", nota: 4 }
];

const aprovados = alunos.filter(aluno => {
    return aluno.nota >= 7;
});

console.log(aprovados);
