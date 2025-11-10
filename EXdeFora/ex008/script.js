function clicar() {
    var I = document.getElementById('Iini')
    var F = document.getElementById('Ifim')
    var resposta = document.getElementById('resp')
    if (I.value.length == 0 || F.value.length == 0) {
        resposta.innerHTML = '<strong>[ERRO]</strong> tente de novo'
    } else {
        resposta.innerHTML = 'Contando: <br>'
        var Inicio = Number(I.value)
        var Fim = Number(F.value)
        if (Inicio > Fim) {
            resposta.innerHTML = ''
            window.alert(`[ERRO]. O número inicial ${Inicio} é maior do que o número final ${Fim}`)
        } else {
            for (let contador = Inicio; contador <= Fim; contador++) {
                if (contador % 2 === 0) {
                    resposta.innerHTML += `<strong>${contador}</strong>\u{1F449}`
                } 
            }
            resposta.innerHTML += '<br> <strong>Fim da contagem!</strong>'
        }
    }
}