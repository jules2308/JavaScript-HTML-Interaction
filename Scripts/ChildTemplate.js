console.log("You made it tot the ChildTemplate.js!"); // Debugging line to console ensuring Javascript link

function main () {

let firstNumber, secondNumber, text;

firstNumber = document.getElementById("textfield1").value;

document.getElementById("ValidityTest1").innerHTML = alert (testNaN (firstNumber));
document.getElementById("ValidityTest1").innerHTML = testNaN (firstNumber);

secondNumber = document.getElementById("textfield2").value;

document.getElementById("ValidityTest2").innerHTML = alert (testNaN (secondNumbertNumber));
document.getElementById("ValidityTest2").innerHTML = testNaN (secondNumber);

if (stop == true) {
  document.getElementById("Large").innerHTML="Restart because I said so."
}
  else {
    console.log("What did you say", geometry (firstNumber, secondNumber));
    document.getElementById("Large").innerHTML = "What did you say" + geometry (firstNumber, secondNumber);
  }
}
