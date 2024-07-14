const button = document.querySelector(".btn")
const screen = document.querySelector(".screen")
const div = document.querySelector("div")
const clear = document.querySelector("#C")
const equal = document.querySelector("#equals")
const answer = document.querySelector(".answer")
let operatorId = ["/", "*", "-", "+", "C"]
let first = document.querySelector(".first")
let operate = document.querySelector(".operator")
let second = document.querySelector(".second")
let firstNumber;
let operator = {};
let secondNumber;

function reset(){
 answer.innerText =""
 first.innerText = ""
second.innerText = ""
operator = {};
unhighlight()
}

function calculation(){
let calc = operator.val
let calcFirst = Number(firstNumber);
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
first.innerText = ""
second.innerText = ""
operator = {};
unhighlight()
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

function divide(a, b){
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
    highlight(event.target.id)
calculation()
}else{
calculation(event.target.id === "equals")
}

}

}

)



