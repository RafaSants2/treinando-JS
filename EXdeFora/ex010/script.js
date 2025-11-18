function avaliar() {
    var cont = document.getElementById('Icont')
    var resultado = document.getElementById('resul')
    resultado.innerHTML = ''
    var paragrafo = document.createElement('p')
    if (cont.value.length == 0) {
        resultado.style = 'margin-top: 15px'
        paragrafo.innerHTML = '<strong>[ERRO]</strong><br> Digite um número para que haja uma contagem.'
        resultado.appendChild(paragrafo)
    } else {
        var contagem = Number(cont.value)
        var soma = 0
        
        while (contagem != 0) {
            soma += contagem
            return;
        }
        paragrafo.innerHTML = `Ao todo, a soma da sua contagem foi de ${soma}`
        resultado.appendChild(paragrafo)
    }
}