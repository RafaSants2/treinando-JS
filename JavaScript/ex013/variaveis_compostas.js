let núm = [34, 5, 2, 19, 11, 1]
núm.push(99)
console.log(`Nosso vetor é o ${núm}`)
console.log(`O primeiro valor do vetor é ${núm[0]} (sem ser de forma crescente)`)
console.log(`Esse vetor possui ${núm.length} elementos.`)
núm.sort()
console.log(`Vetor com os mesmos números, porém de forma crescente: ${núm}`)
console.log(`O primeiro valor do vetor é ${núm[0]} (de forma crescente)`)





/*

Variáveis compostas:
Para entende-lá, vamos ver de novo o que é Variáveis (simples):
- As variáveis simples só conseguem armazenar UM VALOR por vez, ou seja, eu não posso colocar mais de um valor numa mesma variável, a menos que eu troque a anterior por uma nova. É tipo um espaço de estacionamento para carro, nesse espaço caberá apenas um carro, e o minímo que se pode fazer para que seja um carro diferente dentro desse estacionamento, é tirando o carro atual para colocar o novo, e é exatamente isso o que acontece com as váriaveis simples.

- Já as variáveis compostas devem ser capazes de armazenar VÁRIOS VALORES em uma MESMA ESTRUTURA.
EX: vamos supor que eu declare uma variável chamada "A" (de automóvel), que tenha dentro dela uns 5 carros, começando do 0 até o 4, no java script, seria dessa forma: vaga a = [três carros (que seriam dividos por virgulas)], e cada espaço desse, recebe um identificador, que chamamos de chave/índice, ou seja, se eu coloco 3 carros, o primeiro terá a chave 0, o segundo a chave 1, e o terceiro a chave 2 nessa váriavel A. (PRIMEIRA FOTO). Essa variável que declaramos é do tipo composta/array = vetor, e esse vetor é composto por elementos, um elemento de um vetor, é um par que agrupa o espaço da memória, o valor colocado dentro dele e o índice. Por falar em índice, ele é o número que também pode ser chamado de chave, que se encontrá em todos os elementos dentro de um vetor para identificar um por um, e por último, há o conteúdo valor, ou seja, o conteúdo em cada elemento (SEGUNDA FOTO). E como faço esse exemplo de carros ocorrer em JS? - Dessa forma: 

let/var Num = [ 5 , 4 , 9 ] (os elementos se encontrarão dentro dessa var/let Num, sendo separado cada um por vírgula. Nessa caso, eu separei 3 espaços, e quando faço isso, automaticamente ele irá dividir essa variável em 3 partes e já vai dar os indices para cada elemento, começando da esquerda para a direita. (TERCEIRA FOTO)

Caso eu queira acrescentar um valor sem perder os valores atuais no meu vetor, eu uso a variável composta de antes, e adiciono um valor usando a chave/índice seguinte, por exemplo:
let núm = [4, 5, 9, 12, 14, 14]
núm[6] = 18 (se você reparar, dentro do meu vetor havia inicialmente seis números, mas como já sabemos, o primeiro começa com a chave 0, e nesse vetor, termina na chave 5, por isso foi acrescentado o número 18 com a sexta chave, dado que ele é o próximo número). (QUARTA FOTO)
Lembrando que: essa forma é automatizada do JS para acrescentar um número no vetor, mas se você quiser que o JS acrescente na última posição sem especificar, você usa no seu vetor o atributo ".push()" com o número dentro desse parenteses, sendo colocado automaticamente na última posição. (QUINTA FOTO) EX:

let núm = [4, 5, 9, 12, 14, 14]
núm.push(18)
RESULTADO: núm = [4, 5, 9, 12, 14, 14, 18]

Outra coisa que se pode fazer também com arrays/vetores, é saber o comprimento do meu vetor, para isso, usa o atributo ".length" no vetor, EX: "num.length".

Também temos o método ".sort()" que se coloca na array, esse método pega todos os valores dentro do vetor, e vai organizá-los de forma crescente. EX:
ANTES: let núm = [19, 5, 91, 2, 14, 4]

DEPOIS (com 'núm.sort()'): núm = [2, 4, 5, 14, 19, 91]

*/