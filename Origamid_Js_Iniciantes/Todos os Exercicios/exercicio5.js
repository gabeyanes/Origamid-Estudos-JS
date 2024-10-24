// Crie uma função para verificar se um valor é Truthy
function verificandoValor (valor) {
  if(valor){
    return 'valor é verdadeiro';
  }else {
    return 'esse valor não é verdadeiro';
  }
}

verificandoValor(true);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro (lado){
  return lado * 4;
}

perimetro(4);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobrenome){
  console.log(`${nome} ${sobrenome}`);
  return;
}


// Crie uma função que verifica se um número é par

function numeroPar (numero) {
  return numero % 2 === 0;
}

numeroPar(4);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado (dado) {
  return typeof dado;
}

tipoDeDado(4);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener ('click' , function (){
  console.log('Gabriel Yanes');
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
