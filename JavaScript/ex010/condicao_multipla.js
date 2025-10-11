var agora = new Date()
var diaSem = agora.getDay()
/*
    0 - Domingo
    1 - Lunes
    2 - Martes
    3 - Miércoles
    4 - Jueves
    5 - Viernes
    6 - Sábado
*/
switch(diaSem) {
    case 0:
        console.log('Hoy es Domingo')
        break
    case 1:
        console.log('Hoy es Segunda')
        break
    case 2:
        console.log('Hoy es Martes')
        break
    case 3:
        console.log('Hoy es Miércoles')
        break
    case 4:
        console.log('Hoy es Jueves')
        break
    case 5:
        console.log('Hoy es Viernes')
        break
    case 6:
        console.log('Hoy es Sábado')
        break
}