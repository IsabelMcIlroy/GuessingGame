// kitchen page
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