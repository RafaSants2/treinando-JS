function clicar() {
    let ini = document.getElementById('Iini')
    let final = document.getElementById('IFim')
    let resposta = document.getElementById('resp')
    if (ini.value.length == 0 || final.value.length == 0) {
        resposta.innerHTML = '<strong>[ERRO]</strong> Digite um número.'
    } else {
        resposta.innerHTML = 'Contando: <br>'
        let inicio = Number(ini.value)
        let fim = Number(final.value)
        if (inicio > fim) {
            resposta.innerHTML = ''
            window.alert(`[ERRO] O número inicial (${inicio})  é maior que o número final (${fim}). Tente de novo`)
        } else {
            for (let contador = inicio; contador <= fim; contador++) {
            resposta.innerHTML += `<strong>${contador}</strong> <br>`
            }
            resposta.innerHTML += 'Fim da contagem!'
        } 
    }
}