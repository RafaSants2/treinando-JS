function subtracao(a, b) { /*FUNÇÃO QUE POSSUI 2 PARÂMETROS*/
    return a - b;
}

const subtracao2 = (a, b) => a - b; /*SIMILAR A PRIMEIRA, PORÉM SENDO UMA ARROW FUNCTION*/

function somar2(a) { /*FUNÇÃO QUE POSSUI 1 PARÂMETRO*/
    return a + 2;
}

const somar2Arrow = a => a + 2; /*ARROW FUNCTION QUE RECEBE UM PARÂMENTRO*/


function diaDoMes() { /*ESSA FUNÇÃO NÃO VAI PRECISAR DE PARÂMETRO, RETORNA ALGO SEM A NECESSIDADE DE ALGO EM TROCA*/
    return (new Date()).getDate();
}

const diaDoMesArrow = () => (new Date()).getDate(); /*ARROW FUNCTION QUE RETORNA ALGO SEM A NECESSIDADE DE PARÂMETRO*/

/* 
ARROW FUNCTION: 
    - Forma diferente de escrever funções, mas igualmente válida.

QUAL A VANTAGEM DE USAR ARROW FUNCTION NO LUGAR DE FUNCTION?
    - Quando uma ARROW FUNCTION possui apenas uma instrução (de retorno/return), pode-se apagar o return e o ;. 
    
    - Ai vem a pergunta: "Há, mas como vou saber se isso é um retorno?", se essa função NÃO possui colchetes, significa que possui apenas uma instrução, sendo ela uma de return.

    ANTES:
        const subtracao2 = (a, b) => { 
            return a - b;
        }

    DEPOIS: 
        const subtracao2 = (a, b) => a - b;

    Outro detalhe: Quando uma arrow function possui apenas UM PARÂMETRO, não é necessário deixá-lo entre parenteses.

    ANTES:
        const somar2Arrow = (a) => a + 2;

    DEPOIS:
        const somar2Arrow = a => a + 2;
*/