function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pegará o ano atual em 4 digitos
    var formAno = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    if (formAno.value.lenght == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/jovemH.jpg') /*se usa para adicionar uma foto para um elemento/tag criado por aqui*/
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/adolescenteH.jpeg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultoH.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/velhoH.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/jovemM.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/adolescenteM.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultaM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/velhoM.jpeg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img) /* para eu fazer com que as imagens apareçam, eu tenho que usar esse atributo "append.Child" com o nome da tag criada por aqui, fazendo com que seja substituido ou adicionado aquilo que está na tag que se encontra no HTML que eu liguei com a var resultado */
    }
}

/*var gênero = document.createElement('img') = como as imagens vão ser dinâmicas (ou seja, feitas por aqui, e não pelo html usando a tag IMG, se usa createElemente para criar um elemento/tag*/

/*img.setAttribute('id', 'foto') = se usa para criar um id para minha tag/elemento criada aqui (img), com o nome do id chamado "foto"*/

/*Usando esses dois, é o mesmo que fazer no HTML: <img id='foto'> */