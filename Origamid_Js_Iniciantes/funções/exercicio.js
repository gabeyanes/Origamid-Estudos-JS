// Crie uma função para verificar se um valor é Truthy
// !! é usado para verificar se o dado é falsy ou truthy

function isTruthy(valor) {
  return !!valor;
}

console.log(isTruthy('oie'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroDoQuadrado(lado){
  var perimetro = lado * 4;
  return perimetro;
}

console.log(perimetroDoQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

//use template string nesses casos
function nomeCompleto(nome, sobrenome){
  console.log(`${nome} ${sobrenome}`);
  return;
}

// Crie uma função que verifica se um número é par

function isEven(numero){
  var modulo = numero % 2;
  if(modulo === 0){
    return true;
  } else{
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
  return typeof dado;
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener ('scroll' , function(){
  console.log("Gabriel Yanes");
})

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
