// ESCOPO 

// Escopo de Função

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas 

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined(carro não está definido)

// Escopo evita o conflito entre nomes.

// Variável Gloal(ERRO)

// Declarar variáveis sem a palavra chave VAR, CONST ou LET, cria uma variável que pode ser acessada em qualquer escopo(global). Isso é um erro.

function mostrarCarro2(){
  carro2 = 'Ford K';
  console.log(carro2);
}

mostrarCarro2(); // Ford K
console.log(carro2); // Ford K

// 'use strict' impede isso.

// Escopo de Função (Pai)

// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro3 = 'hb20s';

function mostrarCarro3() {
  var frase = `Meu carro é um ${carro3}`;
  console.log(frase);
}

mostrarCarro3(); // Meu carro é um hb20s
console.log(carro3); // hb20s

// ESCOPO DE BLOCO

// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declaramos uma variável é utiliando const e let, pois estas respeitam o escopo de bloco.

if(true){
  let carro4 = 'BMW';
  console.log(carro4);
}

// console.log(carro4); // Carro

// VAR VAZA O BLOCO

// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if(false) {
  var carro5 = 'Pulse';
  console.log(carro5);
}

console.log(carro5); // Undefined

// Const e Let no lugar de var

// A partir de agora vamos utilizar apenas const e let para declaramos variáveis.

if(true){
  const carro6 = 'Tracker';
  console.log(carro6);
}

// console.log(carro6); // erro, carro6 is not defined;


// {} CRIA UM BLOCO

// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {} 

{
  var carro7 = 'UNO';
  // const ano = 2016; 
}

console.log(carro7); // UNO
// console.log(ano); // erro ano is not defined

// FOR LOOP

// Ao utilizar Var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.

var i = 50;

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i * 10); // 10

// Agora iremos utilizar let nos for loop 

// CONST

// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável evitando bugs no código.

const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
// data = 'Janeiro'; // erro

// Variáveis com valores constantes

// LET

// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

