let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btSomar = document.querySelector("#btSoma");
let res = document.querySelector("#res");

function somar(){
    res.textContent = Number (num1.value)+ Number(num2.value);
}



btSomar.onclick = function(){
    somar();
}