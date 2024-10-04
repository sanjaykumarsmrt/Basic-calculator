var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var resultText = document.getElementById("resultText");


function addition() {
    resultText.innerHTML = Number(input1.value) + Number(input2.value);

    clear();
}
 
function subtraction() {
    resultText.innerHTML = Number(input1.value) - Number(input2.value);

    clear();
}

function multiplication() {
    resultText.innerHTML = Number(input1.value) * Number(input2.value);

    clear();
}

function division() {
    resultText.innerHTML = Number(input1.value) / Number(input2.value);

    clear();
}

function clear() {
    input1.value = "";
    input2.value = "";
}

