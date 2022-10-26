"use strict";

window.onload = function(){
    console.log("index4");
    document.getElementById("btnDoSomething").onclick = function(){
         document.getElementById("output").value = 
        Number(document.getElementById("num1").value) 
        + Number(document.getElementById("num2").value);};};
