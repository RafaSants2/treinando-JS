function gerar_resposta() {
    var núm = document.getElementById('iNum')
    var tabu = document.getElementById('seltab')
    if (núm.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let número = Number(núm.value)
        let c = 1
        tabu.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') /*Para eu criar um elemento, qualquer que seja, dentro do java script, eu uso createElement('option'), porque dentro do meu select, para eu colocar opções, eu preciso usar a tag "option", mas posso fazê-la de maneira mais dinamica, fazendo por aqui, ou seja, escrevendo a tag por aqui ('option'), que seria o mesmo de ir no html e colocar dentro da tag select a tag option.*/
            item.text /*esse "text" se refere á parte de dentro do 'option'*/ = `${número} x ${c} = ${número * c}`
            item.value = `tab${c}`
            tabu.appendChild(item) /*ou seja, 'adicionar um elemento filho'*/
            c++
        }
    }
}
