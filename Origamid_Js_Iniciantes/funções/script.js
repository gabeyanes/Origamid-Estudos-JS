// Funções

// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e amesma retorna outro valor.

function areaQuadrado(lado){
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) //25
areaQuadrado(2) //4

// Chamada de function declaration

console.log(areaQuadrado(110));

function pi(){
  return 3.14;
}

console.log(pi());

console.log(pi);

var total = 5 * pi(); // 15.7
console.log(total);
// Parênteses () executam uma função

// Parâmetros e Argumentos;

// Ao criar uma função, você pode definir parâmetros.
// Ao criar uma função, você pode passar argumentos.

// Peso e altura são os parâmetros

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

console.log(imc(50, 1.60));
// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também.


// Parênteses executa a função;

function corFavorita(cor) {
  if(cor === 'azul'){
    return 'Eu gosto do céu'
  } else if(cor === 'verde'){
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}

corFavorita() // retorna 'Você não gosta de nada.'
console.log(corFavorita());

// Se apenas definirmos a função com o function e não executarmos a mesma nada que estiver dentro dela irá acontecer;

// Argumentos podem ser funções!
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function(){
  console.log('Clicou');
});

// function mostraConsole() {
//   console.log('Oi');
// }

// addEventListener('click', mostraConsole);

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}


// Pode ou não retornar um valor

// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normamente, independente de existir valor de return ou não.

function imc2(peso, altura){
  const imc = peso / (altura ** 2); 
  console.log(imc); // se aplicar o console.log direto na função  sem o return não aparece o undefined
}

imc2(80, 1.80); // Retorna undefined
console.log(imc2(80, 1.80)); // retorna o imc e undefined

// Valores Retornados

// Uma função pode retornar qualquer tipo de dado e até outras funções


function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe a sua idade!'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// Após o return não acontece mais nenhuma outra ação!

console.log(terceiraIdade('oie'));

// Escopo

// Variáveis e funçõs definidas dentro de um bloco {}, não são visíveis fora dele.
// Toda variável criada dentro da função não é visível ao lado de fora dela a não ser quando chamada.

function precisoVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}

console.log(precisoVisitar); // Erro, totalPaises não definido
console.log(precisoVisitar(43));

// Escopo Léxico

// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';
function dados() {
  var nome = 'André', idade2 = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade2 = 29;
    return `${nome}, ${idade2}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna "André, 29, Rio de Janeiro, Designer"
// outrosDados(); // retorna um erro

// Hoisting
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

