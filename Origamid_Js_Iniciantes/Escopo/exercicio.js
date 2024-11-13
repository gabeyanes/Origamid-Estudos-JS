// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(var, marca, portas);

// R: No console.log invés de mencionar o nome da variável é mencionado var além disso as variáveis não podem ser chamadas foram do escopo do bloco.

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero <= 500; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);