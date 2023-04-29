let calc_num = document.querySelectorAll("button");

let textCalc = document.querySelector(".text");

function calculatorHandler(val) {
    let initVal = val.target.innerHTML;

    textCalc.value += initVal;

    if (initVal == "C" || initVal == "CE") {
      textCalc.value = "";
    }

    let optArr = ["+", "-", "/", "x", "%", "="];

    let operator = optArr.find((opt) => {
      return opt == initVal;
    });

    let textVal = textCalc.value;

    textVal.split(operator);

    console.log(textVal);
}

calc_num.forEach((calc) => {
    calc.addEventListener("click", calculatorHandler)
})