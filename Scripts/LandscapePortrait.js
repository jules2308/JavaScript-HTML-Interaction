console.log("I made it tot Landscape and Portrait!");

let stop = false;

function testNaN (number) {
  if (isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function geometry (width, height) {
  if (width == height) return 'Square';
  return (width > height) ? 'Landscape' : 'Portrait';
}

  function main () {

    let firstNumber, secondNumber, text;

    firstNumber = document.getElementById("textfield1").value; // Width --> 6 (number) --> id=textfield1 --> firstNumber

    document.getElementById("ValidityTest1").innerHTML = alert (testNaN (firstNumber));
    document.getElementById("ValidityTest1").innerHTML = testNaN (firstNumber);

    secondNumber = document.getElementById("textfield2").value; // Height --> 6 (number) --> id=textfield2 --> secondNumber

    document.getElementById("ValidityTest2").innerHTML = alert (testNaN (secondNumber));
    document.getElementById("ValidityTest2").innerHTML = testNaN (secondNumber);

    if (stop == true) {
      document.getElementById("large").innerHTML="Restart the example, an "
    }
      else {
        console.log("This display geometry is", geometry (firstNumber, secondNumber));
        document.getElementById("large").innerHTML = "This display geometry is" + geometry (firstNumber, secondNumber);
      }
    }
