const words = [
"Aspiring Electrical Engineer",
"Python Developer",
"Arduino Enthusiast",
"Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const current = words[wordIndex];

if(!deleting){
charIndex++;
}else{
charIndex--;
}

document.getElementById("typing").textContent =
current.substring(0,charIndex);

if(!deleting && charIndex === current.length){
deleting = true;
setTimeout(typeEffect,1200);
return;
}

if(deleting && charIndex === 0){
deleting = false;
wordIndex = (wordIndex + 1) % words.length;
}

setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

function resumeAlert(){

alert(
"Résumé Coming Soon!"
);

}
