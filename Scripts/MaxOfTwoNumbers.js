console.log("I made it to Max Of Two Numbers!");

let stop = false;

function testNaN (number) {
  if (isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function geometry (number1, number2) {
  if (number1 == number2) return 'The numbers are the same';
  return (number1 > number2) ? 'Number 1' : 'Number 2';
}

function max (number1, number2) { //Notice these parameters are local and do not mix with "number" variable
  if (number1 > number2) return number1;
  else if (number1 < number2) return number2;
  else square = true;

  function main () {

    let firstNumber, secondNumber;

    firstNumber = document.getElementById("textfield1").value; // Width --> 6 (number) --> id=textfield1 --> firstNumber

    document.getElementById("ValidityTest1").innerHTML = alert (testNaN (firstNumber));
    document.getElementById("ValidityTest1").innerHTML = testNaN (firstNumber);

    secondNumber = document.getElementById("textfield2").value; // Height --> 6 (number) --> id=textfield2 --> secondNumber

    document.getElementById("ValidityTest2").innerHTML = alert (testNaN (secondNumber));
    document.getElementById("ValidityTest2").innerHTML = testNaN (secondNumber);

    if (stop == true) {
      console.log("The biggest number is", geometry (firstNumber, secondNumber));
      document.getElementById("large").innerHTML = "The biggest number is" + geometry (firstNumber, secondNumber);
      }
    }
  
