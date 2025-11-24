/* FORMA TRADICIONAL
let núm = [7, 5, 2, 8, 3, 1, 4]
núm.push(6)
núm.sort()
console.log('De forma ORDENADA:')
for(let pos = 0 ; pos < núm.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${núm[pos]}`)
}
*/

/*FORMA SIMPLIFICADA E EXCLUSIVA: */
let núm = [7, 5, 2, 8, 3, 1, 4]
núm.push(6)
núm.sort()
for(let pos in núm) {
    console.log(`A posição ${pos} tem o valor ${núm[pos]}`)
}


/*
"percurso para exibição no vetor"
O QUE FOI MOSTRADO AQUI?
    - Uma maneira limpa e tradicional de se mostrar os elementos dentro de um vetor, sem as virgulas e sem os colchetes e, para isso, se usa uma estrutura de repetição, criando uma variável chamada "pos" junto com minha variável composta (núm[pos]), que serve para mostrar a posição de cada elemento, e para saber o limite, se usa o atributo ".length", ou seja, 'enquanto "pos" for menor que o comprimeto/quantidade de elementos dentro do meu vetor (núm.length), ele vai acrescentar 1 a si mesmo (pos++)'.
*/