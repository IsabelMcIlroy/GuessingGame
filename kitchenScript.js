// kitchen page
document.getElementById('answerOne').value = ''
document.getElementById('answerTwo').value = ''
document.getElementById('answerThree').value = ''
document.getElementById('answerFour').value = ''
document.getElementById('answerFive').value = ''

// display time
const clock = document.getElementById('time');

function formatTime(dateObject) {
    const parts = {
        hour: dateObject.getHours(),
        minute: dateObject.getMinutes().toString().padStart(2, "0")
    }
    document.getElementById('clock').innerHTML = `${parts.hour}:${parts.minute}`
    return `${parts.hour}:${parts.minute}`
    
} 

const myTime = new Date();
const myTimeFormatted = formatTime(myTime);

console.log(myTimeFormatted);

// guess word
// question one
const checkAnswer = document.getElementById('enter');  
checkAnswer.addEventListener('click', (e) => {
    e.preventDefault();
    questionOne();
})
function questionOne() {
    answer = document.getElementById('answerOne').value;
    if (answer == 'rolling pin') {
        document.getElementById('RollingPin').classList.remove("hide");
        document.getElementById('questionTwo').classList.remove("hide");
        document.getElementById('questionOne').classList.add("hide");
        document.getElementById('answerTwo').classList.remove("hide");
        document.getElementById('answerOne').classList.add("hide");
        document.getElementById('enterTwo').classList.remove("hide");
        document.getElementById('enter').classList.add("hide"); 
    }
    else if (answer == 'Rolling Pin') {
        document.getElementById('RollingPin').classList.remove("hide");
        document.getElementById('questionTwo').classList.remove("hide");
        document.getElementById('questionOne').classList.add("hide");
        document.getElementById('answerTwo').classList.remove("hide");
        document.getElementById('answerOne').classList.add("hide");
        document.getElementById('enterTwo').classList.remove("hide");
        document.getElementById('enter').classList.add("hide");
    }
    else {
        document.getElementById('answerOne').value = 'try again!'
    }
}
// question two
const checkAnswerTwo = document.getElementById('enterTwo');  
checkAnswerTwo.addEventListener('click', (e) => {
    e.preventDefault();
    questionTwo();
})
function questionTwo() {
    answer = document.getElementById('answerTwo').value;
    if (answer == 'mixer') {
        document.getElementById('Mixer').classList.remove("hide");
        document.getElementById('Paddle').classList.remove("hide");
        document.getElementById('CakeBatter').classList.remove("hide");
        document.getElementById('questionThree').classList.remove("hide");
        document.getElementById('questionTwo').classList.add("hide");
        document.getElementById('answerThree').classList.remove("hide");
        document.getElementById('answerTwo').classList.add("hide");
        document.getElementById('enterThree').classList.remove("hide");
        document.getElementById('enterTwo').classList.add("hide");
    }
    else if (answer == 'Mixer') {
        document.getElementById('Mixer').classList.remove("hide");
        document.getElementById('Paddle').classList.remove("hide");
        document.getElementById('CakeBatter').classList.remove("hide");
        document.getElementById('questionThree').classList.remove("hide");
        document.getElementById('questionTwo').classList.add("hide");
        document.getElementById('answerThree').classList.remove("hide");
        document.getElementById('answerTwo').classList.add("hide");
        document.getElementById('enterThree').classList.remove("hide");
        document.getElementById('enterTwo').classList.add("hide");
    }
    else {
        document.getElementById('answerTwo').value = 'try again!'
    }
}
// question three
const checkAnswerThree = document.getElementById('enterThree');  
checkAnswerThree.addEventListener('click', (e) => {
    e.preventDefault();
    questionThree();
})
function questionThree() {
    answer = document.getElementById('answerThree').value;
    if (answer == 'boiling over') {
        document.getElementById('Drips').classList.remove("hide");
        document.getElementById('questionFour').classList.remove("hide");
        document.getElementById('questionThree').classList.add("hide");
        document.getElementById('answerFour').classList.remove("hide");
        document.getElementById('answerThree').classList.add("hide");
        document.getElementById('enterFour').classList.remove("hide");
        document.getElementById('enterThree').classList.add("hide");
    }
    else if (answer == 'Boiling Over') {
        document.getElementById('Drips').classList.remove("hide");;
        document.getElementById('questionFour').classList.remove("hide");
        document.getElementById('questionThree').classList.add("hide");
        document.getElementById('answerFour').classList.remove("hide");
        document.getElementById('answerThree').classList.add("hide");
        document.getElementById('enterFour').classList.remove("hide");
        document.getElementById('enterThree').classList.add("hide");
    }
    else {
        document.getElementById('answerThree').value = 'try again!'
    }
}
// question four
const checkAnswerFour = document.getElementById('enterFour');  
checkAnswerFour.addEventListener('click', (e) => {
    e.preventDefault();
    questionFour();
})
function questionFour() {
    answer = document.getElementById('answerFour').value;
    if (answer == 'tea kettle') {
        document.getElementById('TeaKettle').classList.remove("hide");
        document.getElementById('Steam').classList.remove("hide");
        document.getElementById('questionFive').classList.remove("hide");
        document.getElementById('questionFour').classList.add("hide");
        document.getElementById('answerFive').classList.remove("hide");
        document.getElementById('answerFour').classList.add("hide");
        document.getElementById('enterFive').classList.remove("hide");
        document.getElementById('enterFour').classList.add("hide");
    }
    else if (answer == 'Tea Kettle') {
        document.getElementById('TeaKettle').classList.remove("hide");
        document.getElementById('Steam').classList.remove("hide");
        document.getElementById('questionFive').classList.remove("hide");
        document.getElementById('questionFour').classList.add("hide");
        document.getElementById('answerFive').classList.remove("hide");
        document.getElementById('answerFour').classList.add("hide");
        document.getElementById('enterFive').classList.remove("hide");
        document.getElementById('enterFour').classList.add("hide");
    }
    if (answer == 'kettle') {
        document.getElementById('TeaKettle').classList.remove("hide");
        document.getElementById('Steam').classList.remove("hide");
        document.getElementById('questionFive').classList.remove("hide");
        document.getElementById('questionFour').classList.add("hide");
        document.getElementById('answerFive').classList.remove("hide");
        document.getElementById('answerFour').classList.add("hide");
        document.getElementById('enterFive').classList.remove("hide");
        document.getElementById('enterFour').classList.add("hide");
    }
    else if (answer == 'Kettle') {
        document.getElementById('TeaKettle').classList.remove("hide");
        document.getElementById('Steam').classList.remove("hide");
        document.getElementById('questionFive').classList.remove("hide");
        document.getElementById('questionFour').classList.add("hide");
        document.getElementById('answerFive').classList.remove("hide");
        document.getElementById('answerFour').classList.add("hide");
        document.getElementById('enterFive').classList.remove("hide");
        document.getElementById('enterFour').classList.add("hide");
    }
    else {
        document.getElementById('answerFour').value = 'try again!'
    }
}
// question five
const checkAnswerFive = document.getElementById('enterFive');  
checkAnswerFive.addEventListener('click', (e) => {
    e.preventDefault();
    questionFive();
})
function questionFive() {
    answer = document.getElementById('answerFive').value;
    if (answer == 'muffins') {
        document.getElementById('Muffins').classList.remove("hide");
        document.getElementById('questionFive').classList.add("hide");
        document.getElementById('dRoom').classList.remove("hide");
        document.getElementById('answerFive').classList.add("hide");
        document.getElementById('bRoom').classList.remove("hide");
        document.getElementById('enterFive').classList.add("hide");
        document.getElementById('home').classList.remove("hide");
        document.getElementById('kRoom').classList.remove("hide");
    }
    else if (answer == 'Muffins') {
        document.getElementById('Muffins').classList.remove("hide");
        document.getElementById('questionFive').classList.add("hide");
        document.getElementById('dRoom').classList.remove("hide");
        document.getElementById('answerFive').classList.add("hide");
        document.getElementById('bRoom').classList.remove("hide");
        document.getElementById('enterFive').classList.add("hide");
        document.getElementById('home').classList.remove("hide");
        document.getElementById('kRoom').classList.remove("hide");
    }
    else {
        document.getElementById('answerFour').value = 'try again!'
    }
}
