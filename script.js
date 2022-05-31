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

// clear answer boxes
// question one
function clearOne() {
    const clearinput = function() {  
        document.getElementById('answerOne').value = '' 
 }
 setTimeout(clearinput, 1000); 
 }
// question two
function clearTwo() {
    const clearinput = function() {  
        document.getElementById('answerTwo').value = '' 
 }
 setTimeout(clearinput, 1000); 
 }
 // question three
function clearThree() {
    const clearinput = function() {  
        document.getElementById('answerThree').value = '' 
 }
 setTimeout(clearinput, 1000); 
 }
 // question four
function clearFour() {
    const clearinput = function() {  
        document.getElementById('answerFour').value = '' 
 }
 setTimeout(clearinput, 1000); 
 }
 // question five
function clearFive() {
    const clearinput = function() {  
        document.getElementById('answerFive').value = '' 
 }
 setTimeout(clearinput, 1000); 
 }
