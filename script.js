//SCREEN
let screen = document.getElementById("screen");

//NUMBER KEYS
const numbers = document.getElementsByClassName("number");

// OPERATOR KEYS
const operators = document.getElementsByClassName("operator")

// OTHER BUTTONS
const equals = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const del = document.querySelector(".delete");


let print = []//what's printed on the screen
let num1;
let num2;
let operator;
let total;

//NUMBER CLICK FUNCTION
for (let i = 0; i < numbers.length; i++){
      numbers[i].onclick = () => {
            if (operator === undefined) {
                  print.push(numbers[i].innerHTML);
                  screen.innerHTML = parseFloat(print.join(""));
                  num1 = parseFloat(print.join(""));
            } else if (operator !== undefined) {
                  print.push(numbers[i].innerHTML);
                  screen.innerHTML = parseFloat(print.join(""));
                  num2 = parseFloat(print.join(""));
                  calculate(num1, num2);
            }
      };
}


//OPERATOR CLICK FUNCTION
for (let i = 0; i < operators.length; i++){
      operators[i].onclick = () => {
            if (operator === undefined) {
                  print = [];
                  operator = operators[i].innerHTML;
            } else if (operator !== undefined){
                  print = [];
                  screen.innerHTML = total;   
                  operator = operators[i].innerHTML;
                  num1 = total;
            } 
      }
}

//CALCULATE FUNCTION
function calculate(number1, number2) {
      if (operator === "+") {
            total = number1 + number2;
      } else if (operator === "-") {
            total = number1 - number2;
      } else if (operator === "/") {
            total = number1 / number2;
      }else if (operator === "x") {
            total = number1 * number2;
      }
}

//EQUAL FUNCTION
equals.onclick = () => {
      screen.innerHTML = total;
      print = [];
}

//RESET FUNCTION
function resetAll() {
      screen.innerHTML = "0";
      print = [];
      num1 = undefined;
      num2 = undefined;
      operator = undefined;
      total = undefined;
}

reset.onclick = resetAll;

//DELETE FUNCTION
del.onclick = () => {
      if (print.length > 1) {
            print.pop();
            screen.innerHTML = parseFloat(print.join(""))
      } else{
            resetAll();
            screen.innerHTML = "0";
      }
}