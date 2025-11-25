N = [5, 9, 3, 7]
var menor = N[0]
var maior = N[0]
for (pos = 0 ; pos < N.length ; pos++) {
    if (N[pos] < menor) {
        menor = N[pos]
    }
    if (N[pos] > maior) {
        maior = N[pos]
    }
}
console.log(`O menor número é o ${menor}, e o maior número é o ${maior}`)

/* Versão melhor e simplificada
N = [5, 9, 3, 7]
var maior = N[0]
for (var pos of N) {
    if (pos > maior) {
        maior = valor
    }
}
console.log(`O maior número é o ${maior}`)
*/