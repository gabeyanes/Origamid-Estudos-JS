// Node

// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = documento.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHieght; // retorna aaltura do elemento;

titulo.addEventListener('click' , callback);
// ativa a função callback ao click no titulo

// Retorne o url da página atual utilizando o objeto window
const link = window.location.href ; 
console.log(link);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo')
// Retorne a linguagem do navegador
window.navigator.language 
// Retorne a largura da janela 
window.innerWidth