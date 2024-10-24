// nomeie 3 propriedades ou métodos de strings

var nome = 'Gabriel';

nome.charAt(1);
nome.length;
nome.slice(0 , 4);
nome.replace('Gab', 'Lia');


// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn')

btn.addEventListener('click' , function(){
  btn.classList.toggle('ativo')
})

btn.remove('.btn');
btn.classList.add('blue');
btn.innerHTML;
btn.scroll();

// addEventListener
// appendChild
// outerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var input = document.querySelector('input');

function stringGenerator(){
  var random = Math.random().toString(36).slice(-10)

  input.value = random
}

function copyToClipboard(){
  navigator.clipboard.writeText(input.value).then(() =>{
    console.log('texto copiado');
    }
  )
}


// Exercicio que o rafael passou método dele

function copyText(){
  var input2 = document.getElementById('meuInput')
  navigator.clipboard.writeText(input2.value).then(() =>{
    console.log('aprendemos a copiar?');
  })
}


// Método do CHATGPT

var input = document.querySelector('input');

function stringGenerator() {
  var random = Math.random().toString(36).slice(-10);
  input.value = random;
}

// Ele adiciona condicionais para garantir que não dê merda

function copyToClipboard() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(input.value).then(() => {
      console.log('Texto copiado!');
    }).catch(err => {
      console.error('Falha ao copiar texto: ', err);
    });
  } else {
    console.warn('O navegador não suporta o clipboard API');
  }
}