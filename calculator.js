// Select the display element and all buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["%", "*", "/", "-", "+", "="];    // Define an array of special characters used in calculations

let output = "";    // Initialize the output variable to store the calculation expression

// Define function to calculate based on button clicked.
const calculate = (btnValue) => {

    display.focus();    // Focus on the display element

    // Check the value of the clicked button and perform appropriate actions
    if (btnValue === "=" && output !== "") // If the button is "=", evaluate the expression
    {
        output = eval(output.replace("%", "/100")); // Replace "%" with "/100"

    } else if (btnValue === "AC") {
        output = "";    // If the button is "AC" (all clear), reset the output

    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);    // If the button is "DEL" (delete), remove the last character from the output

    } else {
        if (output === "" && specialChars.includes(btnValue)) return;   // If output is empty and button is specialChars then return

        output += btnValue; // Concatenate the button value to the output
    }

    display.value = output;  // Update the display with the current output
};

// Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    // Button click listener calls calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
