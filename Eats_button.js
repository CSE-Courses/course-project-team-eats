/*
*Author: Rick Thompson
*Date:9/22/2020
*File Type:Javascript
*Purpose:
*
*/
const button = document.createElement("button");
button.innerText = "Lets Eat";

const center = document.getElementById("center");

center.appendChild(button);

button.addEventListener("click", function () {
    window.location = "radius.html";
});

