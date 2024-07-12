const button = document.querySelector(".btn")
const screen = document.querySelector(".screen")
const div = document.querySelector("div")
const clear = document.querySelector("#C")
const equal = document.querySelector("#equals")
const first = document.querySelector(".first")
const operate = document.querySelector(".operator")
const second = document.querySelector(".second")
let firsNumber;
let secondNumber;
let operator;


function reset(){
    first.innerText = ""
    second.innerText = ""
    operate.innerText = ""
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
    if(event.target.tagName === "BUTTON" && event.target.id !== "C" && event.target.id !== "equals"){
        
        if(event.target.id === "7" || event.target.id === "8" ||event.target.id === "9" ||
            event.target.id === "4" ||event.target.id === "5" ||event.target.id === "6" ||
            event.target.id === "1" ||event.target.id === "2" ||event.target.id === "3" ||event.target.id === "0"
        ){
        let firstNumber = document.querySelector(".first")
        firstNumber.innerText += event.target.innerText
        
    }
    else if(event.target.id === "/" || event.target.id === "x" || event.target.id === "-" || event.target.id === "+")
    {
        let operator = document.querySelector(".operator")
        operator.innerText = event.target.innerText
    }
        else if(event.target.id === "7" || event.target.id === "8" ||event.target.id === "9" ||
            event.target.id === "4" ||event.target.id === "5" ||event.target.id === "6" ||
            event.target.id === "1" ||event.target.id === "2" ||event.target.id === "3" ||event.target.id === "0"
        ){
        let secondNumber = document.querySelector(".second")
        secondNumber.innerText += event.target.innerText}
    }
}
)



