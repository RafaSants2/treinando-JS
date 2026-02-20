function criarMensagem(nome, callback) {
    return callback(nome);
}

function saudacao(SaudacaoName) {
    return "Olá, " + SaudacaoName;
}

function regressoNome(voltarNome) {
    return "Bem-vindo de volta, " + voltarNome;
}

function despedida(DespedidaNome) {
    return "Boa noite, " + DespedidaNome;
}

const mensagem = criarMensagem("Rafa", saudacao);
const mensagem2 = criarMensagem("Rafa", regressoNome);
const mensagem3 = criarMensagem("Rafa", despedida);
console.log(mensagem);
console.log(mensagem2);
console.log(mensagem3);