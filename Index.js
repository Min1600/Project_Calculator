const button = document.querySelector(".btn")
const screen = document.querySelector(".screen")
const div = document.querySelector("div")
const equal = document.querySelector("#equals")
const answer = document.querySelector(".answer")
let operatorId = ["/", "*", "-", "+"]
let first = document.querySelector(".first")
let operate = document.querySelector(".operator")
let second = document.querySelector(".second")
let firstNumber = "";
let operator = {};
let secondNumber = "";
let answerNumber = "";

function clear(){
    first.innerText = ""
    second.innerText = ""
    operator = {};
    firstNumber = ""
    secondNumber =""
    unhighlight()
}
function reset(){
 answer.innerText =""
 answerNumber = ""
clear()
}

function calculation(){
let calc = operator.val
let calcFirst = Number(firstNumber)
let calcSecond = Number(secondNumber)

switch(calc){
    case "+":
       answer.innerText = add(calcFirst, calcSecond);
       break;
     case "-":
        answer.innerText = subtract(calcFirst, calcSecond);
        break;
    case "*":
        answer.innerText =  multiply(calcFirst, calcSecond);
        break;
     case "/":
        answer.innerText =  divide(calcFirst, calcSecond);
        break;

}
answerNumber = answer.innerText
clear()
}

function answerCalculation(){
let calc = operator.val
let calcFirst = Number(answerNumber)
let calcSecond = Number(secondNumber)

switch(calc){
    case "+":
       answer.innerText = add(calcFirst, calcSecond);
       break;
     case "-":
        answer.innerText = subtract(calcFirst, calcSecond);
        break;
    case "*":
        answer.innerText =  multiply(calcFirst, calcSecond);
        break;
     case "/":
        answer.innerText =  divide(calcFirst, calcSecond);
        break;

}
answerNumber = answer.innerText
clear()
}

function convert(){
if (first.innerText !==""){
    Number(first.innerText > 0) ?
    first.innerText = -Math.abs(Number(first.innerText))
    : first.innerText = Math.abs(Number(first.innerText))
    firstNumber = first.innerText
}else if(second.innerText !==""){
    Number(second.innerText > 0) ?
    second.innerText = -Math.abs(Number(second.innerText))
    : first.innerText = Math.abs(Number(second.innerText))
    secondNumber = second.innerText
}else if(answer.innerText !==""){
    Number(answer.innerText > 0) ?
    answer.innerText = -Math.abs(Number(answer.innerText))
    : answer.innerText = Math.abs(Number(answer.innerText))
    answerNumber = answer.innerText
}
}

function percentage(){
if (first.innerText !== ""){
   first.innerText = divide(Number(first.innerText), 100)
    firstNumber = first.innerText 
}else if (second.innerText !== ""){
    second.innerText = divide(Number(second.innerText), 100)
    secondNumber = second.innerText
}else if (answer.innerText !== ""){
    answer.innerText = divide(Number(answer.innerText), 100)
    answerNumber = answer.innerText
}
}
function highlight(event){
    let itemHighlight = operatorId.filter((item) => item !== event)
document.getElementById(event).style.backgroundColor = "silver"
itemHighlight.forEach( (item) => document.getElementById(item).style.backgroundColor = "coral")
}

function unhighlight(){
    operatorId.forEach( (item) => document.getElementById(item).style.backgroundColor = "coral")
}

function add(a, b){
return Math.round(((a + b) + Number.EPSILON) * 100000000) / 100000000
}

function subtract(a, b){
    return Math.round(((a - b) + Number.EPSILON) * 100000000) / 100000000
}

function multiply(a, b){
return Math.round(((a * b) + Number.EPSILON) * 100000000) / 100000000
}

function divide(a, b){
return Math.round(((a / b) + Number.EPSILON) * 100000000) / 100000000
}

div.addEventListener("click", (event) => {


if(event.target.tagName === "BUTTON" && event.target.id !== "clear" && event.target.id !== "negative" && event.target.id !== "decimal"){

if(event.target.id !== operatorId && event.target.id !== "*" && event.target.id !== "/" &&event.target.id !== "-" && event.target.id !== "+" && event.target.id !== "equals" && !operator.hasOwnProperty("val")){
    first.innerText += event.target.innerText
firstNumber = first.innerText
answer.innerText = ""

}else if(operator.hasOwnProperty("val") && event.target.id !== "/" && event.target.id !== "*" && event.target.id !== "-" && event.target.id !== "+" && event.target.id !== "equals"){
    first.innerText = ""
    second.innerText += event.target.innerText
    secondNumber = second.innerText
    answer.innerText = ""

}else if(second.innerText === "" && event.target.id !== "equals"){
    highlight(event.target.id)
    operator.val = event.target.innerText

 } 
else if(event.target.id !== "equals" &&  event.target.id === "/" || event.target.id === "*" || event.target.id === "+" || event.target.id === "-" ){
    if(answerNumber !== ""){
        answerCalculation()
    }else{
    calculation()}
    operator.val = event.target.innerText
    highlight(event.target.id)
    
}else if(answerNumber!== ""){
answerCalculation()
}else{
    calculation()
}

}

}

)



