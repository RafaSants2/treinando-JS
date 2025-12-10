let num = document.getElementById('Inum')
let lista = document.getElementById('flista')
let resposta = document.getElementById('res')
let valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !inlista(num.value, valores)) { //LEMBRE-SE, essa "!" antes de "inlista" significa NÃO/NEGATIVO
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text /*tipo string*/ = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
    
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        
        resposta.innerHTML = ''
    }
}