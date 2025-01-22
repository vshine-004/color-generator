let btn = document.querySelector("button");
let colorbox= document.querySelector(".color-box");
let head = document.querySelector("h1");
btn.addEventListener("click",colorgen);
function colorgen(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    console.log(red,green,blue);
    colorbox.style.backgroundColor = `rgb(${red},${green},${blue})`;
    head.innerText = `rgb(${red},${green},${blue})`;
}


