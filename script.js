function calculate() {
    // Get the input values from the user
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    // Perform the calculation based on the operator
    if (operator == "+") {
        var result = num1 + num2;
    } else if (operator == "-") {
        var result = num1 - num2;
    } else if (operator == "*") {
        var result = num1 * num2;
    } else if (operator == "/") {
        var result = num1 / num2;
    } else {
        var result = "Invalid operator";
    }

    // Display the result to the user
    document.getElementById("result").innerHTML = result;
}