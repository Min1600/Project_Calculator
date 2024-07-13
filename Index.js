const button = document.querySelector(".btn")
const screen = document.querySelector(".screen")
const div = document.querySelector("div")
const clear = document.querySelector("#C")
const equal = document.querySelector("#equals")
let operatorId = ["/", "*", "-", "+", "C"]
let first = document.querySelector(".first")
let operate = document.querySelector(".operator")
let second = document.querySelector(".second")
let firstNumber;
let operator = {};
let secondNumber;

function reset(){
    first.innerText = ""
    second.innerText = ""
    operate.innerText = ""
    unhighlight()
    
}

function calculation(){
let calc
console.log(Number(firstNumber))
console.log(operator.val)
console.log(Number(secondNumber))
firstNumber = "";
operator = {};
secondNumber = "";
}

function highlight(event){
    let itemHighlight = operatorId.filter((item) => item !== event)
document.getElementById(event).style.backgroundColor = "white"
itemHighlight.forEach( (item) => document.getElementById(item).style.backgroundColor = "gray")
}

function unhighlight(){
    operatorId.forEach( (item) => document.getElementById(item).style.backgroundColor = "gray")
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

if(event.target.tagName === "BUTTON" && event.target.id !== "C"){

if(event.target.id !== "/" && event.target.id !== "*" && event.target.id !== "-" && event.target.id !== "+" && event.target.id !== "equals" && !operator.hasOwnProperty("val")){
    first.innerText += event.target.innerText
firstNumber = first.innerText


}else if(operator.hasOwnProperty("val") && event.target.id !== "/" && event.target.id !== "*" && event.target.id !== "-" && event.target.id !== "+" && event.target.id !== "equals"){
    first.innerText = ""
    second.innerText += event.target.innerText
    secondNumber = second.innerText


}else if(second.innerText === "" && event.target.id !== "equals"){
    highlight(event.target.id)
    operator.val = event.target.innerText
}else if(event.target.id !== "equals" &&  event.target.id === "/" || event.target.id === "*" || event.target.id === "+" || event.target.id === "-" ){
calculation()
}else{
calculation(event.target.id === "equals")
reset()
}

}

}

)



