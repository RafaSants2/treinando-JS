/*var letra = ['a', 'b', 'a', 'a', 'c']
var contador = 0
for (var pos = 0 ; pos < letra.length ; pos++) {
    if (letra[pos] === 'a') {
        contador++
    }
}
console.log(`A letra 'a' foi vista ${contador}X`)*/
var letra = ['a', 'b', 'a', 'a', 'c']
var contador = 0
for (let pos in letra) {
    if (letra[pos] === 'a') {
        contador++
    }
}
console.log(`A letra 'a' foi vista ${contador}X`)