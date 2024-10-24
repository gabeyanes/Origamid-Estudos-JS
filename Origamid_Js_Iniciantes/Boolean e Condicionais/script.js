// Boolean

// Existem dois valores booleanos false ou true.
// Esses valores já são reservados e não podem usar como nome de variavel
var possuiGraduacao = false;
var possuiDoutorado = false;
// Condicionais If e Else

// Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado

// if(possuiGraduacao){
//   console.log('Possui graduação');
//   var x = 10;
// } else {
//   console.log('Não possui graduação');
// }

// se eu aplicar let aqui daria um erro pois a condição só seria criada caso a condicional fosse verdadeira
// console.log(x);
//retorna Possui Graduação e não executa o else

// O valor dentro dos parênteses sempre será avaliado em false ou true.

// Condicionais Else If

// Se o if não for verdadeiro, ele testa o else if

if(possuiDoutorado){
  console.log('Possui graduação e doutorado');
}else if(possuiGraduacao){
  console.log('Possui graduação, mas não possui doutorado');
} else{
  console.log('Não possui graduação');
}

// Retorna Possui graduação, mas não possui doutorado.

// Truthy e Falsy


//Falsy
// if(false)
// if(0) // ou -0
// if(Nan)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

// Todo o resto é truthy


var nome = '';

if(nome){
  console.log(nome);
} else{
  console.log('Nome não existe');
}

//Truthy 

// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

// Operador Lógico de Negação!
// O operador ! , nega uma operação booleana. Ou seja, !true é igual a false

//Truhty
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

if(!possuiGraduacao){
  console.log(possuiGraduacao);
  console.log('Não possui graduação');
} else{
  console.log(possuiGraduacao);
}

// Operadores de Comparação

// Vão sempre retornar um valor booleano

// 10 > 5; // true
// 5 > 10; // false
// 20 < 10; // false
// 10 <= 10; // true
// 10 >= 11; // false

// Operadores de comparação

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; //true
10 == 10; // true
10 === '10' // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

// Operadores Lógicos &&
// && Compara se uma expressão e a outra é verdadeira

// true && true; //true
// true && false; // false
// false && true; // false
// 'Gato' && 'Cão' // 'Cão'
// (5 - 5) && (5 + 5); // 0
// 'Gato' && false // false
// (5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true ele irá retornar o último valor verificado se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos!

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso hein');
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro hein');
} else {
  console.log('Falso hein');
}

// Operadores Lógicos ||
// || Compara se uma expressão ou outra é verdadeira

// true || true; // true
// true || false; // true
// false || true; // true
// 'Gato' || 'Cão'; // 'Gato'
// (5 - 5) || (5 + 5); // 10
// 'Gato' || false; // Gato
// (5 >= 5) || (3 < 6); // true

// Retorna o primeiro valor true que encontrar!

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);
var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);

