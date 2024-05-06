let numInput1 = document.getElementById("input1");
let numInput2 = document.getElementById("input2");

let num1 = Number(numInput1.value);
let num2 = Number(numInput2.value);

input1.addEventListener("input", e=> {
    num1 = Number(e.target.value);
    renderResult();
})
input2.addEventListener("input", e=> {
    num2 = Number(e.target.value);
    renderResult();
})

function renderResult() {
    const resultBox = document.getElementById("result");
    let sum = num1 + num2;
    if(isNaN(sum)) {
        sum = "사용할 수 없는 값입니다.";
    }
    resultBox.innerHTML = sum;
}