// Desafio 1
function compareTrue(valor1, valor2 ) {
  return valor1 && valor2 === true
};

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
};

// Desafio 3
function splitSentence(string) {
    return string.split([' '])
};

// Desafio 4
function concatName(arr) {   
    let name1 = arr[0];   
    let name2 = arr.lenght-1;  
    let junta = arr[arr.length -1] 
    return `${junta}, ${name1}`;
}
// Desafio 5
function footballPoints(wins , ties) {
    let vitorias = wins * 3;
    let empates =  ties * 1;
    let pontos = vitorias + empates
    return pontos;
}
// Desafio 6
function highestCount(arr) {
  let big = 0;
    
  let idx = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
 
      if ( arr[i] > 0 || arr[i] < 0 ) {
    
          big = arr[i];
  }
}
      for ( let index in arr ) {
          if (arr[index] === big) {
              idx += 1;
          }
      }
  return idx;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
