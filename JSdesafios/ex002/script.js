function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pegará o ano atual em 4 digitos
    var formAno = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    if (formAno.value.lenght == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')[1]
        var idade = ano - Number(formAno.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
    }
}