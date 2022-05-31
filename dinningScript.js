// dinning page

// guess word
// question one
function questionOne() {
    answer = document.getElementById('answerOne').value;
    if (answer === 'tea cup' || answer ===  'Tea cup') {
        document.getElementById('TeaCup').classList.remove("hide");
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
    if (answer === 'tea pot' || answer ===  'Tea pot') {
        document.getElementById('TeaPot').classList.remove("hide");
        document.getElementById('Tea').classList.remove("hide");
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
    if (answer === 'butter' || answer ===  'Butter') {
        document.getElementById('Butter').classList.remove("hide");
        document.getElementById('ButterKnife').classList.remove("hide");
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
    if (answer === 'lava' || answer ===  'Lava') {
        document.getElementById('LavaCake').classList.remove("hide");
        document.getElementById('Lava').classList.remove("hide");
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
    if (answer === 'candle' || answer ===  'Candle') {
        document.getElementById('Candle').classList.remove("hide");
        document.getElementById('Flame').classList.remove("hide");
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
