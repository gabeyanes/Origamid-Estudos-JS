// Tipos de dados
// Todos são primitivos exceto os objetos

var nome = 'Yanes'; // String
var idade = 25; // Number
var possuiDoutorado = true; // Boolean
var time; //Undefined 
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//Primitivos são dados imutáveis


// Verificar tipo de Dado

var nomeDois = 'André';
var sobrenomeDois = 'Augusto';
var idadeDois = 27;
var timeDois = null;
var simboloDois = Symbol()
console.log(typeof simboloDois);
// retorna string

var nomeCompleto = nomeDois + ' ' + sobrenomeDois;
console.log(nomeCompleto);

// var gols = 1000;
// var frase = 'Romario fez'+gols+ ' gols';
// console.log(typeof frase);

var ano = 2018;
var mes = 8;
console.log(ano + mes);

//Errado criar assim:
// var melhor = 'teste'
// var frase1 = 'Esse é o \"melhor\" jogo';
// console.log(frase1);

//Template String
//Você deve passar expressões / variáveis dentro de ${}
var gols = 1000;
var frase1 = 'Romário fez ' + gols + 'gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase2);

// Declara uma variável contendo uma string
var lapis = 'lápis'
console.log(lapis);

//Declare uma variável contendo um número dentro de uma string
var numeroQualquer = '42';
console.log(numeroQualquer);

// Declare uma variável com a sua idade
var minhaIdade = 21;
console.log(minhaIdade);

// Declare duas variáveis, uma com seu nome e outro com seu sobrenome e some as mesmas
var meuNome = 'Gabriel', meuSobrenome = 'Yanes';
var meuNomeCompleto = `${meuNome} ${meuSobrenome}`;
console.log(meuNomeCompleto);

// Coloque a seguinte frase em uma variável: It is time
var fraseDeEfeito = 'It is time'
var frase3 = `Damn, i cant believe ${fraseDeEfeito} for this again!`
console.log(frase3);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof meuNome);
