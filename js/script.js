console.log('js ok');


const numbers = [];
const userNum = [];


for(i=0; i < 5; i++){
    const randomNum = Math.floor(Math.random() * 50 + 1);
    numbers.push(randomNum);
}

alert(numbers);

setTimeout(question, 3000);

function question() {
   userNum =  prompt('inserisci i numeri:');}

    if(userNum == numbers[i]){
        correctNum.push(userNum);
    }



const correctNum = [];
const correctAns = [];


alert(`ha indovinato numeri:${userNum}`);

