
var nome = 'Yanes';
let idade = 21;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'Rafael', 
    cidade = 'Rio';

console.log(sobrenome, cidade);

var SemDefinir;
console.log(SemDefinir);

// // Inválido
// var #nome;
// var function;
// var 1possuiFaculdade;

// // Válido
// var $selecionar;
// var _nome;
// var possuiFaculdadeNoExterior;

// Declarar a váriavel é sempre necessário.
// console.log(varNaoDefinida);


//Hoisting
// São movidas para cima do código, porém o valor atribuído não é movido.

console.log(nomeDois);
var nomeDois = 'Yanes';
// Retorna undefined

var profissao = 'Dev';
console.log(profissao);
// Retornar Dev

var time = 'Vasco';
console.log(time)
time = 'Flamengo';
console.log(time)

//Exercicio 1

// Declarar uma variável com o seu nome:
var meuNome = 'Gabriel Yanes';

// Declar uma variável com a sua idade:
var minhaIdade = 21;

// Declarar uma variável com a ausa comida favorita e não atribuir valor
var minhaComidaFavorita;

// Atribuir valor a sua comida favorita:
minhaComidaFavorita = 'Carbonara';

// Declarar 5 variáveis diferentes sem valores:
var minhaProfissao, minhaFaculdade, minhaMae, meuPai, meuTelefone;