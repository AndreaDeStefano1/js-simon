const numbersCollection = [];
const numbers = document.getElementById('target-numbers');
const timer = document.getElementById('time-to-hide');
let counter = document.getElementById('count');23
const guessed = document.getElementById('numeri-indovinati');
let sec = 5;
const userNumbers = [];

stampNumbers();
const myInterval = setInterval(gestisciInterval, 1000);
setTimeout( getUserInput, 7001 );


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
  console.log(numbersCollection);
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
    const num = parseInt(prompt('Inserisci un numero di quelli che erano visualizzati'));
    userNumbers.push(num)
    
  }
  foundedNumbers();

}

function foundedNumbers(){
  let count = 0;
  for (let i = 0; i < userNumbers.length; i++) {
    const element = userNumbers[i];
    console.log(element);
    if(numbersCollection.includes(element)){
      numbersCollection.splice(numbersCollection.indexOf(element), 1)
      count++;
      counter.innerText = `${count}`;
      guessed.innerText += `${element}  `;
      document.getElementById('response').classList.remove('d-none')
    }
    
    
    console.log(numbersCollection)
  }
}