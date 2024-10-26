// Comentários

// Servem para explicar o código

/*
Comentário 
com diversas 
linhas
*/

// var nome = 'André'

// Comentar uma linha de código desativa a mesma. Não deixe linhas de código comentadas no arquivo final.

//  Operadores de Atribuição;

// Podem funcionar como formas abreviadas

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operador Ternário
// Abreviação de condicionais com if e else

var idade = 17;
var naoPossuiDiabetes = false;

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) //

// condição ? true : false

// If Abreviado

// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = false;
if(possuiFaculdade)console.log('Possui faculdade');
else console.log('Não possui faculdade');

//  OU
// Duas formas diferentes de alocar o espaço
if(possuiFaculdade)
  console.log('Possui faculdade');
else 
  console.log('Não possui faculdade o miseravel');

