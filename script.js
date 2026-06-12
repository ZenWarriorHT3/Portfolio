const text = [
"Python Developer",
"Web Developer",
"Future Software Engineer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = text[i];

if(!isDeleting){
j++;
}else{
j--;
}

document.getElementById("typing")
.textContent = current.substring(0,j);

if(j===current.length){
isDeleting=true;
setTimeout(type,1000);
return;
}

if(j===0){
isDeleting=false;
i=(i+1)%text.length;
}

setTimeout(type,isDeleting?50:100);

}

type();
