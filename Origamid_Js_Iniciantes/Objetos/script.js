// Objetos

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // True

// Propriedades e métodos consistem em nome (chave) e valor;

// Métodos

// É uma propriedade que possui uma função no local do seu valor.

// var quadrado = {
//   lados: 4,
//   area: function(lado){
//     return lado * lado;
//   },
//   perimetro: function(lado) {
//     return this.lados * lado;
//   },
// }

// ABREVIAÇÃO

// Abreviação de area: function() {} para area(){}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado; 
  },
  cinco(){
    return 5;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20


// Organizar o Código

// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random; // retorna um número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?
// R: não tinha e nem imaginava;

// Criar um Objeto

// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// DOT NOTATION GET (ANOTAÇÃO DE DOT E DOT É O PONTO)

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}


menu.backgroundColor = '#000'

// PODE ADICIONAR NOVAS PROPRIEDADES E MÉTODOS TAMBÉM!!!
menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgroundColor; 

// ADICIONAR PROPRIEDADES E MÉTODOS

// BASTA ADICIONAR UM NOVO NOME E DEFINIR O VALOR!

// var menu = {
//   width: 800,
// }

// menu.height = 50;
// menu.position = 'fixed';

// PALAVRA-CHAVE THIS

// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2
  }
}

menu2.metadeHeight(); // 25
// sem o this, seria 60

// this irá retornar o próprio objeto

// PROTÓTIPO E HERENÇA
// O objeto herda propriedades e métodos do objeto qur foi utilizado para criar o mesmo.

var menu3 = {
  with: 800,
}

menu3.hasOwnProperty('width') // true
menu3.hasOwnProperty('height') // false

// hasOwnProperty é um método de Object


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Gabriel',
  sobrenome: 'Yanes',
  idade: 21,
  escolaridade: 'Ensino Superior',
  comidaFavorita: 'Macarrao',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.meuNomeCompleto = function(){
  return `Meu nome completo é ${this.nome} ${this.sobrenome}!`;
}

console.log(dados.meuNomeCompleto()); 

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  especie: 'Cão',
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem'){
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}



