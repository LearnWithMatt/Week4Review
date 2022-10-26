"use strict";

window.onload = init;


function init(){
    console.log("index2");
    document.getElementById("btnDoSomething").onclick = btnDoSomethingOnClick;
}

function btnDoSomethingOnClick(){

    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const answer = num1 + num2;

    document.getElementById("output").value = answer;

    //do click stuff here.

}