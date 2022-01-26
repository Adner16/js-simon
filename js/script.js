console.log('js ok');


const numbers = [];
const userChoise = [];

for(i=0; i < 5; i++){
    const randomNum = Math.floor(Math.random() * 50 + 1);
    numbers.push(randomNum);
}

alert(numbers);

setTimeout(question, 3000);


function question() {
    const correctNum = [];
    let userNum;
    do {
        userNum =  parseInt(prompt('inserisci i numeri:'));
        if(userChoise.includes(userNum)){
            alert('hai gia inserito questo numero');
        } else {
            userChoise.push(userNum);
        }    
        if(numbers.includes(userNum)){
            correctNum.push(userNum)
        }    
    } while (userChoise.length < 5);

    alert(`hai indovinato ${correctNum} numeri:${correctNum.length}`);
}    



