// Números

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

console.log(exp);

// Operadores

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

console.log(modulo);

// Lembrando que soma + em Strings serve para concatenar

var total1 = 10 + 5 + 10;
var divisao1 = 200 / 5;
var modulo2 = 387298392 % 3;

console.log(modulo2);

// Operadores Aritméticos (Strings)

var soma1 = '100' + 50; // 10050
var subtracao1 = '100' - 50; //50
var multiplicacao1 = '100' * '2'; // 200
var divisao2 = 'Comprei 10' / 2; // NaN(Not a Number)

console.log(subtracao1);

var testeNan = '100' / 2;
console.log(isNaN(testeNan));//Retornar False
// É possivel verificar se uma variável é Nan ou não com a função "isNaN()"


//Nan = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // 80kg
var pesoPorDois = peso / 2 // Nan (Not a Number)

// A ordem importa

// Começa por multiplicação e divisão, depois por soma e subtração
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; //40

console.log(total4);

// Parênteses para priorizar uma expressão

// Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++);
console.log(incremento);

var decrimento = 5;
console.log(decrimento--);
console.log(decrimento);

//O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // Nan
console.log(frase);

var idade1 = '28';
// var idade1 = +'28'; // já transforma a string em número real
+idade1; // 28 (número)
-idade1; // -28 (número)
// Adicionar + na frente da string o transforma em número(caso seja um número) e caso adicione - torna o número negativo
console.log(+idade + 5); // 33
console.log(+idade + -5);

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1

// O - antes de um número torna ele negativo



