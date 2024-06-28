//when a number is clicked, that number is printed to the screen and added to the equation
//when an operator is clicked, the screen is cleared and that operator is added to the equation
//when delete is clicked, the equation is cleared and the screen is cleared
//when equal(=) is clicked, the value of the equation is printed on the screen
//when the equation value is printed on the screen,  the next button click should replace that


//SCREEN
let screen = document.getElementById("screen");

// NUMBER KEYS
const zero = document.querySelector(".zero")
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const decimalPoint = document.querySelector(".point");

// OPERATOR KEYS
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");

// OTHER BUTTONS
const equals = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const del = document.querySelector(".delete");


const numbers = [zero, one, two, three, four, five, six, seven, eight, nine, decimalPoint];
const operators = [plus, minus, divide, multiply];

let print = []//what's printed on the screen
let input = []//ongoing equation
let num1;
let num2;
let total;

for (let i = 0; i < numbers.length; i++){
      numbers[i].onclick = () => {
            print.push(numbers[i].innerHTML);
            input.push(numbers[i].innerHTML);
            screen.innerHTML = print.join("");
      };
}


plus.onclick = () => {
      if (num1 === undefined) {
            print = [];
            screen.innerHTML = print;    
            num1 = input.join("") * 1;
            input = [];
      } else if ((num1 !== undefined) && (num2 === undefined)){
            print = [];
            num2 = input.join("") * 1;
            total = num1 + num2;
            screen.innerHTML = total;
            input = [];
      } else if ((num1 !== undefined) && (num2 !== undefined)) {
            print = [];
            num1 = total;
            num2 = input.join("") * 1;
            total = num1 + num2;
            screen.innerHTML = total;
            input = [];
      }
}

 
// equals.onclick = () => {
      
// }

reset.onclick = () => {
      screen.innerHTML = "0";
      print = [];
      input = [];
      num1 = undefined;
      num2 = undefined;
}

console.log(num1)
