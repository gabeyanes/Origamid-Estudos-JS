// TUDO É OBJETO

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'Gabriel';

nome.length; // 7
nome.charAt(1); // 'n'
nome.replace('el', 'ela'); // 'Gabriela'
nome; // 'Gabriel'

//Se não é função é método

// Uma string herda propriedades e métodos do construtor String()

nomeMinusculo = nome.toLocaleLowerCase() 

// NÚMEROS 

var altura = 1.8;

altura.toString(); // '1.8' transforma em string
altura.toFixed(); // '2' toFixed tenta arredondar o valor tanto pra maior quanto pra menor

// FUNÇÕES

function areaQuadrado(lado){
  return lado * lado;
}

areaQuadrado.toString();
// "function areaQuadrado(lado){
// return lado * lado;
// }"

areaQuadrado.length; // 1

// ELEMENTOS DO DOM (Document Object Model)

var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  btn.classList.toggle('ativo');
  console.log('clicou');
})

btn.classList.add('azul'); // adiciona a classe azul
btn.innerText; // 'Clique'
