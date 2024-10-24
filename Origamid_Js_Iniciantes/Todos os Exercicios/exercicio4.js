// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21;
var idadeMae = 49;

if(minhaIdade > idadeMae){
  console.log('É maior');
} else if(minhaIdade == idadeMae){
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// A ultima conta de subtração pois o operador && retorna o ultimo valor pois todos são true e no caso da string vazia ali é como se tivesse um zero

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('uau brasil tem mais pessoas que o brasil');
} else if(brasil < china){
  console.log('obviamente a china tem mais gente que o brasil');
} else {
  console.log('uau eles tem a msm população??');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Ira aparecer 'Verdadeiro' pois o operador && ira retornar a primeira resolução verdadeira que encontrar que no caso é 5 > 2

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // Retorna cão
} else {
  console.log('Falso');
}

// Operador && retorna o último valor truthy se todos os operandos forem verdadeiros.
// Operador || retorna o primeiro valor truthy encontrado.

// o operador || retorna com a condição após passar por todos os valores caso não ache um valor TRUTHY porém retorna o primeiro valor TRUTHY que achar e o Operador && retorna o primeiro valor FALSY que encontra porém no console.log('Gato' && 'Cão') ambos os valores são verdadeiros assim o operador && retornou o último valor verdadeiro.