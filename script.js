//when a number is clicked, that number is printed to the screen and added to the equation
//when an operator is clicked, the screen is cleared and that operator is added to the equation
//when delete is clicked, the equation is cleared and the screen is cleared
//when equal(=) is clicked, the value of the equation is printed on the screen
//when the equation value is printed on the screen,  the next button click should replace that


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
let input = []//ongoing equation
let num1;
let num2;
let operator;
let total;

//NUMBER CLICK FUNCTION
for (let i = 0; i < numbers.length; i++){
      numbers[i].onclick = () => {
            if (operator === undefined) {
                  print.push(numbers[i].innerHTML);
                  input.push(numbers[i].innerHTML);
                  screen.innerHTML = parseFloat(print.join(""));
                  num1 = parseFloat(input.join(""));
            } else if (operator !== undefined) {
                  print.push(numbers[i].innerHTML);
                  input.push(numbers[i].innerHTML);
                  screen.innerHTML = parseFloat(print.join(""));
                  num2 = parseFloat(input.join(""));
                  calculate(num1, num2);
            }
      };
}


//OPERATOR CLICK FUNCTION
for (let i = 0; i < operators.length; i++){
      operators[i].onclick = () => {
            if (operator === undefined) {
                  input = [];
                  print = [];
                  screen.innerHTML = print;   
                  operator = operators[i].innerHTML;
            } else if (operator !== undefined){
                  input = [];
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
      input = [];
      print = [];
      num1 = undefined;
      num2 = undefined;
}

//RESET FUNCTION
reset.onclick = () => {
      screen.innerHTML = "0";
      print = [];
      input = [];
      num1 = undefined;
      num2 = undefined;
      operator = undefined;
      total = undefined;
}