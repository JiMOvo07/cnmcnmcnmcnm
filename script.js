const inputA = document.querySelector("#number-a");
const inputB = document.querySelector("#number-b");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("[data-op]");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const op = button.dataset.op;
    let answer;

    if (op === "divide" && b === 0) {
      result.textContent = "除數不可為 0";
      return;
    }

    if (op === "add") answer = a + b;
    else if (op === "subtract") answer = a - b;
    else if (op === "multiply") answer = a * b;
    else answer = a / b;

    result.textContent = "答案：" + answer;
  });
});
