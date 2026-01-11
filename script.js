let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "AC") {
      expression = "";
      input.value = "0";
    }

    else if (value === "Del") {
      expression = expression.slice(0, -1);
      input.value = expression || "0";
    }

    else if (value === "=") {
      try {
        expression = expression
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-");

        expression = eval(expression);
        input.value = expression;
      } catch {
        input.value = "Error";
        expression = "";
      }
    }

    else if (value === "%") {
      expression = expression + "/100";
      input.value = expression;
    }

    else {
      if (expression === "0") expression = "";
      expression += value;
      input.value = expression;
    }
  });
});
