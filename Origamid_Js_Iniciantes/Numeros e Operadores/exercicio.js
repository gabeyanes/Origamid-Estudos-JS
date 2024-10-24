// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN;
var umNumero = 'oie' / 2;
console.log(umNumero);
var umNaoNumero = 17 * 'oie';
console.log(umNaoNumero);

// Somar a string '200' com o número 50 e retornar 250
var numero1 = '200', numero2 = 50;
var total1 = +numero1 + numero2;
console.log(total1);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
// console.log(incremento++); só retorna 6 no próximo console.log
console.log(++incremento);

// Como dividir o peso por 2?

// var numero = '80', unidade = 'kg';
// var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN(Not a Number)

var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = peso;

console.log(pesoPorDois);