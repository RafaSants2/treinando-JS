function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossivel fazer a contagem!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerarei PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let contador = i; contador <= f; contador += p) {
            res.innerHTML += `${contador} \u{1F449}` /*esses códigos só funcionam entre crases*/
            }
        } else {
            //contagem regressiva
            for(let contador = i; contador >= f; contador -= p) { /*enquanto contador for menor ou igual ao fim, ele vai perder o passo*/
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}