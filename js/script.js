console.log('js ok');


const numbers = [];


for(i=0; i < 5; i++){
    const randomNum = Math.floor(Math.random() * 50 + 1);
    numbers.push(randomNum);
}

alert(numbers);

setTimeout(question, 3000);


function question() {
    const correctNum = [];
    let userNum;
    for( i = 0; i <5; i++){
      userNum =  prompt('inserisci i numeri:');

    if(userNum == numbers[i]){
        correctNum.push(userNum);
    }

    }
    alert(`hai indovinato ${correctNum} numeri:${correctNum.length}`);

}    



