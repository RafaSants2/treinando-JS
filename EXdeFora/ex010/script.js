var senha_correta = Math.floor(Math.random() * 100) + 1; /*senha correta usando Math.floor(Math.random()), fazendo com que seja algo aleatorio*/
function resposta () {
    var senha_pergunta = document.getElementById('iSenha')
    var resposta = document.getElementById('result')
    if (senha_pergunta.value.length == 0) {
        window.alert('[ERRO]. Tente digitar uma senha')
    } else {
        var senha = Number(senha_pergunta.value)
        resposta.innerHTML = ''
        resposta.style = 'font-size: 16px'
        if(senha < 1 || senha > 100) {
            resposta.innerHTML = 'SENHA INVÁLIDA!'
            resposta.innerHTML += ' Tente novamente'
        } else {
            if (senha > senha_correta) {
                while (senha != senha_correta) {
                resposta.innerHTML = `A senha <strong>${senha}</strong> está <strong>ERRADA!</strong>`
                resposta.innerHTML += ' Tente novamente. <br>'
                resposta.innerHTML += `<br> <strong>DICA:</strong> A tua senha (<strong>${senha}</strong>) é <strong>maior</strong> do que a senha correta!`
                return; // ← ESSA LINHA é o segredo para não travar, ou seja impede loop infinito
                }
            } else if (senha < senha_correta) {
                while (senha != senha_correta) {
                resposta.innerHTML = `A senha <strong>${senha}</strong> está <strong>ERRADA!</strong>`
                resposta.innerHTML += ' Tente novamente. <br>'
                resposta.innerHTML += `<br> <strong>DICA:</strong> A tua senha (<strong>${senha}</strong>) é <strong>menor</strong> do que a senha correta!`
                return; // ← ESSA LINHA é o segredo para não travar, ou seja impede loop infinito
                }
            }
            resposta.style = 'font-size: 20px'
            resposta.innerHTML = `\u{2728} Parábens, você acertou! \u{2728}`
            senha_correta = Math.floor(Math.random() * 100) + 1; /*Faz a senha criada pelo programa mudar APÓS O ACERTO.*/
        }
    }
}
