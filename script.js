// set answers to blanks
document.getElementById('answerOne').value = ''
document.getElementById('answerTwo').value = ''
document.getElementById('answerThree').value = ''
document.getElementById('answerFour').value = ''
document.getElementById('answerFive').value = ''

// make guess buttons clickable
// question one
const checkAnswer = document.getElementById('enter');  
checkAnswer.addEventListener('click', (e) => {
    e.preventDefault();
    questionOne();
})
// question two
const checkAnswerTwo = document.getElementById('enterTwo');  
checkAnswerTwo.addEventListener('click', (e) => {
    e.preventDefault();
    questionTwo();
})
// question three
const checkAnswerThree = document.getElementById('enterThree');  
checkAnswerThree.addEventListener('click', (e) => {
    e.preventDefault();
    questionThree();
})
// question four
const checkAnswerFour = document.getElementById('enterFour');  
checkAnswerFour.addEventListener('click', (e) => {
    e.preventDefault();
    questionFour();
})
// question five
const checkAnswerFive = document.getElementById('enterFive');  
checkAnswerFive.addEventListener('click', (e) => {
    e.preventDefault();
    questionFive();
})
