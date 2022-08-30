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
  let big = Number.NEGATIVE_INFINITY;
    
  let idx = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
 
      if ( arr[i] > big ) {
    
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
function catAndMouse(mouse , cat1, cat2) {

    let range1 = Math.abs( cat1 - mouse );
    
      let range2 = Math.abs( cat2 - mouse )
            if( range1 < range2 ){
          return 'cat1'
        } else if ( range1 > range2 ) {
          return 'cat2'
        } else {
          return 'os gatos trombam e o rato foge';
        };
  
      }
      
// Desafio 8
function fizzBuzz(arr) {
  let arrString = [];

  for (let index of arr) {
      let numeros = index;

        if (numeros % 3 === 0 && numeros % 5 === 0) { 
          arrString.push('fizzBuzz')  
      } else if (numeros % 5 === 0) {
          arrString.push('buzz') 
      } else if (numeros % 3 === 0 ) {
          arrString.push('fizz') 
      } else {
          arrString.push('bug!')
      }
  }
  return arrString;
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
