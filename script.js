
const numbers = document.getElementById('target-numbers');

stampNumbers();

function stampNumbers(){
  for (let i = 0; i < 5; i++) {
    const num = getRndInteger( 1 , 100 );
    if(i==4){
      numbers.append(`${num}.`);
    }else numbers.append(`${num}, `);
    
  }
}



function getRndInteger( min, max ) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}