"use strict";

window.onload = init;


function init(){
    console.log("index3");
    document.getElementById("btnDoSomething").onclick = btnDoSomethingOnClick;
}

function btnDoSomethingOnClick(){

    //const answer = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
    //document.getElementById("output").value = answer;

    document.getElementById("output").value = 
        Number(document.getElementById("num1").value) 
        + Number(document.getElementById("num2").value);

}