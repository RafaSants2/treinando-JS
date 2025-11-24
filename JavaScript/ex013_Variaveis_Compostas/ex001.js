let núm = [34, 5, 2, 19, 11, 1]
núm.push(99)
console.log(`Nosso vetor é o ${núm}`)
console.log(`O primeiro valor do vetor é ${núm[0]} (sem ser de forma crescente)`)
console.log(`Esse vetor possui ${núm.length} elementos.`)
console.log(`O valor 11 tem a chave ${núm.indexOf(11)} antes da ordem crescente`)
núm.sort()
console.log(`Vetor com os mesmos números, porém de forma crescente: ${núm}`)
console.log(`O primeiro valor do vetor é ${núm[0]} (de forma crescente)`)
console.log(`O valor 11 tem a chave ${núm.indexOf(11)} após a ordem crescente`)

/*NESTE EXEMPLO, EU USEI:
    - Atributo ".push()", que faz com que seja adicionado um elemento dentro do meu vetor, estando sempre final (último elemento do meu vetor).
    - Especificar o elemento dentro do meu vetor baseado no seu índice/chave, exemplo: núm[0]
    - Atributo ".length", que diz o comprimento/QUANTIDADE DE ELEMENTOS dentro de um vetor
    - Atributo ".sort()", que faz com que os elementos do meu vetor sejam ordenados do maior ao menor. (OBS: esses atributos são usados junto a uma variável, antes do ponto final [ . ])
    - Especificar o ÍNDICE/CHAVE usando ".indexOf()" baseado mp seu ELEMENTO, exemplo: núm.indexOf(11)
*/