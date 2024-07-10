const button = document.querySelector(".btn")
const screen = document.querySelector(".screen")
const div = document.querySelector("div")
let firsNumber;
let secondNumber;
let operator;

function operate(){
    
}
function display(){

}


function add(a, b){
return a + b
}

function subtract(a, b){
    return a - b 
}

function multiply(a, b){
return a*b
}

function divide(a,b ){
return a/b
}


div.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        let display = document.createElement("div")
        display.innerText = event.target.innerText
        screen.appendChild(display)
    }
})



