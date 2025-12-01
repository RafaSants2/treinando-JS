/*quando eu clicar no botão, deve aparecer o menu, da mesma forma para removê-lo*/
function descricao() {
    var texto = document.getElementById('relato')
    if (texto.style.display == 'none') {
        texto.style.display = 'block'
    } else {
        texto.style.display = 'none'
    }
}