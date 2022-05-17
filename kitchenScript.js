// kitchen page

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
function questionOne() {
    answer = document.getElementById('answerOne').value;
    if (answer == 'rolling pin' || 'Rolling pin') {
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
function questionThree() {
    answer = document.getElementById('answerThree').value;
    if (answer == 'boiling over' || 'Boiling over') {
        document.getElementById('Drips').classList.remove("hide");
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
function questionFour() {
    answer = document.getElementById('answerFour').value;
    if (answer == 'kettle' || 'Kettle') {
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
function questionFive() {
    answer = document.getElementById('answerFive').value;
    if (answer == 'muffins' || 'Muffins') {
        document.getElementById('Muffins').classList.remove("hide");
        document.getElementById('questionFive').classList.add("hide");
        document.getElementById('dRoom').classList.remove("hide");
        document.getElementById('answerFive').classList.add("hide");
        document.getElementById('bRoom').classList.remove("hide");
        document.getElementById('enterFive').classList.add("hide");
        document.getElementById('home').classList.remove("hide");
        document.getElementById('kRoom').classList.remove("hide");
        document.getElementById('cRoom').classList.remove("hide");
    }
    else {
        document.getElementById('answerFive').value = 'try again!'
    }
}
