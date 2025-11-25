/* TRADICIONAL:*/
var N = [1, 2, 3, 4]
var soma = 0
for (pos = 0 ; pos < N.length ; pos++) {
    soma += N[pos]
}
console.log(`A soma de todos os números é de ${soma}`)

/* SIMPLIFICADO:
var N = [1, 2, 3, 4]
var soma = 0
for (let pos in N) {
    soma += N[pos]
}
console.log(`A soma de todos os números é de ${soma}`)*/

/*PROFISSIONAL: 
var N = [1, 2, 3, 4]
var soma = N.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)
console.log(soma)*/