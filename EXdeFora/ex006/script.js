function semanal() {
    var semana = document.getElementById('sem')
    var week = new Date()
    var dia_semana = week.getDay()

    switch(dia_semana) {
        case 0:
            semana.innerHTML = 'Hoje é Domingo'
            break
        case 1:
            semana.innerHTML = 'Hoje é Segunda'
            break
        case 2:
            semana.innerHTML = 'Hoje é terça'
            break
        case 3:
            semana.innerHTML = 'Hoje é Quarta'
            break
        case 4:
            semana.innerHTML = 'Hoje é Quinta'
            break
        case 5:
            semana.innerHTML = 'Hoje é Sexta'
            break
        case 6:
            semana.innerHTML = 'Hoje é Sábado'
    }
}
