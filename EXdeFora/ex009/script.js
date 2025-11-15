function resposta () {
    var senha_pergunta = document.getElementById('iSenha')
    var resposta = document.getElementById('result')
    var senha_correta = Math.floor(Math.random() * 25) + 1; /*senha correta usando Math.floor(Math.random()), fazendo com que seja algo aleatorio*/
    if (senha_pergunta.value.length == 0) {
        window.alert('[ERRO]. Tente digitar uma senha')
    } else {
        var senha = Number(senha_pergunta.value)
        
        /*
        if (senha != senha_correta) {
            resposta.innerHTML = `<strong>[ERRO]</strong><br> A senha correta é <strong>${senha_correta}</strong>. Tente novamente`
        } else {
            resposta.innerHTML = 'Tudo ok'
        }
        */        
    }
}