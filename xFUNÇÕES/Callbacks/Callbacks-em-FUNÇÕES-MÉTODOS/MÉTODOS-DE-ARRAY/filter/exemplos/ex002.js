const alunos = [
  { nome: "Rafa", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Ana", nota: 9 },
  { nome: "Julia", nota: 6 },
  { nome: "Marcos", nota: 4 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7).map(aluno => aluno.nome);

/*
POSSO FAZER DESSA FORMA< MAS QUE ACABA SENDO MAIS LONGA.

const filtrado = alunos.filter(aluno => {
    return aluno.nota >= 7;
});

const transformado = filtrado.map(aluno => {
    return aluno.nome;
});

console.log(transformado);*/