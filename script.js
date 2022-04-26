const numbersCollection = [];
const numbers = document.getElementById('target-numbers');
const timer = document.getElementById('time-to-hide');
let sec = 5;
const userNumber = [];

stampNumbers();
console.log(numbersCollection);
const myInterval = setInterval(gestisciInterval, 1000);

function timerToHide(){  
  timer.innerText = `Hai ancora ${sec} secondi per memorizzare i numeri sopra `;   
}

function stampNumbers(){
  for (let i = 0; i < 5; i++) {
    const num = getRndInteger( 1 , 100 );
    numbersCollection.push(num)
    if(i==4){
      numbers.append(`${num}.`);
    }else numbers.append(`${num}, `);
  } 
}

function gestisciInterval() {

  timerToHide();
  sec--;
  console.log('secondi', sec);

  if(sec < 0){

    clearInterval(myInterval);
    hideElement();

  }

}

function hideElement(){

  numbers.classList.add('d-none');
  timer.classList.add('d-none');

}

function getRndInteger( min, max ) {

  return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function getUserInput (){

  for (let i = 0; i < 5; i++) {
    let num
    
  }
  
}