// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// total é 35
console.log(total);

// Crie duas expressões que retornem NaN
var retornaNan = 'opa tenho 10' / 2;
var vixeNsei = 'vixe n tenho 3' * 2;

// Somar a string '200' com o número 50 e retornar 250
var numero1 = '200';
var numero2 = 50;
var soma = +numero1 +numero2;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
incremento++;
console.log(incremento);

// Como dividir o peso por 2?
// var numero = '80';
// var unidade = 'kg';
// var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
// RESOLUÇÃO:

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2;
console.log(`${pesoPorDois + unidade}`);


