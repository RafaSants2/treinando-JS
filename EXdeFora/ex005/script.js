function tempo() {
    var horários = window.document.getElementById('horario')
    var resposta = window.document.getElementById('saudacao')
    var data = new Date()
    var horas = data.getHours()
    horários.innerHTML = `Agora são ${horas} horas.`
    if (horas >= 0 && horas < 12) {
        resposta.innerHTML = 'Bom dia!'
        document.body.style.background = '#aee5ec'
    } else if (horas >= 12 && horas < 18) {
        resposta.innerHTML = 'Boa tarde!'
        document.body.style.background = '#f7d699ff'
    } else {
        resposta.innerHTML = 'Boa noite.'
        document.body.style.background = '#7070eb'
    }
} 