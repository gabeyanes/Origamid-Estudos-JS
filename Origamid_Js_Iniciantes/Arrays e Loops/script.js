// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'Xbox', 'Nintendo'];

videoGames[0] // Switch
videoGames[2] // Xbox

// Acesse um elemento da array utilizando [n]

// Métodos e Propriedades de uma Array

// videoGames.pop(); // Remove o último item e retorna ele
// videoGames.push('3DS'); // Adiciona ao final da array
// videoGames.length; // 3

// Existem diversos outros métodos como map, reduce, forEache mais que veremos mais à frente.

// For Loop

// Fazem algo repetidamente até que uma condição seja atingida.

for(var numero = 0; numero <= 4; numero++){
  console.log(numero);
}

// Retorna de 0 a 10 no console

// O for loop possui 3 partes: início, condição e incremento

// While Loop

var i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

// Não roda essa porra pq quebra o pc(As vezes)!

// Retorna de 0 a 9

// O for loop é o mais comum;

// for(var item = 0; item < videoGames.length; item++){
//   console.log(videoGames[item]);
// }

// O Loop irá parar caso encontro e palavra Break

for (var n = 0; n < videoGames.length; n++){
  console.log(videoGames[n]);
  if(videoGames[n] === 'PS4') {
    break;
  }
}

// Se a condicional vier antes quebra antes de chegar no PS4

// FOREACH

// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array)
});

// O argumento item será atribuído dinamicamente

// Podemos passar os seguintes parâmetros item, index e array.

// Não se confunda com a sintaxe

// var numero = 0;
// var maximo = 50;
// for(;numero < maximo;){
//   console.log(numero);
//   numero++;
// }

// Outro código que funciona mas quebra teu pc pra casa do krl
