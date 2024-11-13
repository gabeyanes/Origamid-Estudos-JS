// Window.alert('isso mesmo');
alert('Isso é um alerta'); // Funciona 

const href = window.location.href;

console.log(href);

if(href === "http://127.0.0.1:5500/index.html"){
  console.log('o href tá certinho');
}


// Window e Document

// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // retorna o body

// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// Exercicio

const h1Selecionado = document.querySelector('h1');