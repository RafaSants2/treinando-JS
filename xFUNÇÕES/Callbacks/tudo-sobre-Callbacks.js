/*
Callback = Chamada de retorno

Ou seja: Uma função passada como argumento para outra função, para ser executada depois.

Antes de tudo, é necessário entender que: o JS executa uma coisa por vez (em sequência).

O ponto central é este:
    Você entrega o controle da execução para outra função.

Você diz: "Quando terminar isso, chama essa função aqui."

- Por que isso existe?
Porque JavaScript é:
    Single-thread (uma coisa por vez)
    Baseado em eventos
    Muito usado para coisas que demoram (rede, clique, tempo, arquivos).

Sem callback, você teria que esperar tudo travar até terminar.

EXEMPLO:
    function saudacao(nome) {
    console.log("Olá, " + nome);
    }

    function processarUsuario(callback) {
    const nome = "Rafa";
    callback(nome);
    }

    processarUsuario(saudacao);

Callbacks são muito usados quando algo demora.
*/

