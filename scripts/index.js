"use strict";

window.onload = init;


function init(){
    const btnDoSomethingElement = document.getElementById("btnDoSomething");
    btnDoSomethingElement.onclick = btnDoSomethingOnClick;

}

function btnDoSomethingOnClick(){

    const num1Element = document.getElementById("num1");
    const num1String = num1Element.value;
    const num1 = Number(num1String);

    const num2Element = document.getElementById("num2");
    const num2String = num2Element.value;
    const num2 = Number(num2String);

    const answer = num1 + num2;

    const output = document.getElementById("output");
    output.value = answer;

    //do click stuff here.

}