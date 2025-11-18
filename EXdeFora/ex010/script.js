function avaliar() {
    var cont1 = document.getElementById('Icont1')
    var cont2 = document.getElementById('Icont2')
    var resultado = document.getElementById('resul')
    var paragrafo = document.createElement('p')
    resultado.innerHTML = ''
    resultado.style.marginTop = '15px';
    if (cont1.value.length == 0 || cont2.value.length == 0) {
        paragrafo.innerHTML = '<strong>[ERRO]</strong><br> Digite um número para que haja uma contagem.'
        resultado.appendChild(paragrafo)
    } else {
        var contagem1 = Number(cont1.value)
        var contagem2 = Number(cont2.value)
        var soma = 0
        if (contagem1 == 0 && contagem2 == 0) {
            paragrafo.innerHTML = 'Programa terminado.'
            resultado.appendChild(paragrafo)
        } else {
            soma = contagem1 + contagem2
            paragrafo.innerHTML = `Ao todo, a soma da tua contagem foi de <strong>${soma}</strong>`
            resultado.appendChild(paragrafo)
        }
    }
}