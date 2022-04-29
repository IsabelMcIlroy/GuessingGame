// Egg Page
const egg = document.getElementById('egg');  

egg.addEventListener('click', (e) => {
    e.preventDefault();
    bounceEgg();
})
function bounceEgg() {
    document.getElementById('egg').classList.add("bounce");
    document.getElementById('Text').classList.add("hide");
    crackEggOne();
    crackEggTwo();
    crackEggThree();
    crackEggFour();
    crackEggFive();
    breakEgg();
    walkChicken();
}

function crackEggOne() {
   const crack = function() {  
   document.getElementById('CrackOne').classList.remove("hide"); 
}
 
setTimeout(crack, 1000); 
}

function crackEggTwo() {
    const crack = function() {  
    document.getElementById('CrackTwo').classList.remove("hide"); 
 }
  
 setTimeout(crack, 2000); 
 }

 function crackEggThree() {
    const crack = function() {  
    document.getElementById('CrackThree').classList.remove("hide"); 
 }
  
 setTimeout(crack, 3000); 
 }

 function crackEggFour() {
    const crack = function() {  
    document.getElementById('CrackFour').classList.remove("hide"); 
 }
  
 setTimeout(crack, 4000); 
 }

 function crackEggFive() {
    const crack = function() {  
    document.getElementById('CrackFive').classList.remove("hide"); 
 }
  
 setTimeout(crack, 5000); 
 }

 function breakEgg() {
    const crack = function() { 
        document.getElementById('Egg').classList.add("hide"); 
        document.getElementById('CrackOne').classList.add("hide");
        document.getElementById('CrackTwo').classList.add("hide");
        document.getElementById('CrackThree').classList.add("hide");
        document.getElementById('CrackFour').classList.add("hide");
        document.getElementById('CrackFive').classList.add("hide");
        document.getElementById('CrackedTop').classList.remove("hide");
        document.getElementById('CrackedTop').classList.add("topOpen");
        document.getElementById('CrackedBottom').classList.remove("hide");
        document.getElementById('CrackedBottom').classList.add("bottomOpen");
 }
  
 setTimeout(crack, 6000); 
 }

 function walkChicken() {
    const crack = function() { 
        document.getElementById('Chicken').classList.add("leave");
        document.getElementById('welcome').classList.add("hide");
        document.getElementById('rooms').classList.remove("hide");
 }
  
 setTimeout(crack, 7000); 
 }
