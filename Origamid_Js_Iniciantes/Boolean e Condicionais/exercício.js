//  Verifique se a sua idade é maior do que a de algum parente
//  Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor';

var minhaIdade = 21, primoIdade = 29;

if(minhaIdade < primoIdade){
  console.log('Eu sou mais novo que o João');
} else if(minhaIdade == primoIdade){
  console.log('Temos a mesma idade');
} else {
  console.log('Ele é mais novo');
}

//Qual valor é retornado na seguinte expressão;
var expressão = (5 - 2) && (5 - ' ') && (5 - 2);//Se string for preenchida vai retornar NaN 
console.log(expressão);

// R: retorna 3 pois nenhuma das expressões é false;

// Verifique se as seguintes variáveis são Truthy ou Falsy;

var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compara o total de habitantes do Brasil com China (valor em milhões);
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('Brasil tem mais habitantes que a China');
} else{
  console.log('O Brasil tem menos habitantes que a China')
}

// O que irá aparecer no console?
// R: Vai retornar Falso!
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
// Vai retornar 'Cão' pois a segunda expressão é true porém no console.log vai aparecer Cão pois é falso;
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}