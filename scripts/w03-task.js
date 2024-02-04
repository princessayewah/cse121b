/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Function to add two numbers
function add(number1, number2) {
    // function body
    return number1 + number2;
  }
  
  // Function to get values from HTML form controls, call the add function, and update the result
  function addNumbers() {
    // Get the values of HTML form controls and convert them to numbers
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
  
    // Call the add function and assign the result to the HTML form element with ID 'sum'
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  // Attach a "click" event listener to the HTML button with ID 'addNumbers' and call the addNumbers function
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  

/* Function Expression - Subtract Numbers */

// Function expression to subtract two numbers
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  // Function expression to get values from HTML form controls, call the subtract function, and update the result
  const subtractNumbers = function() {
    // Get the values of HTML form controls and convert them to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
    // Call the subtract function and assign the result to the HTML form element with ID 'difference'
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  // Attach a "click" event listener to the HTML button with ID 'subtractNumbers' and call the subtractNumbers function
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  


/* Arrow Function - Multiply Numbers */

// Arrow function to multiply two numbers
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow function to get values from HTML form controls, call the multiply function, and update the result
const multiplyNumbers = () => {
  // Get the values of HTML form controls and convert them to numbers
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);

  // Call the multiply function and assign the result to the HTML form element with ID 'product'
  document.querySelector('#product').value = multiply(factor1, factor2);
};

// Attach a "click" event listener to the HTML button with ID 'multiplyNumbers' and call the multiplyNumbers function
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

// Function declaration to divide two numbers
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  // Function expression to get values from HTML form controls, call the divide function, and update the result
  const divideNumbers = function() {
    // Get the values of HTML form controls and convert them to numbers
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
  
    // Call the divide function and assign the result to the HTML form element with ID 'quotient'
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };
  
  // Arrow function to handle division with HTML form controls
  const divideNumbersArrow = () => {
    // Get the values of HTML form controls and convert them to numbers
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
  
    // Call the divide function and assign the result to the HTML form element with ID 'quotient'
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };
  
  // Attach a "click" event listener to the HTML button with ID 'divideNumbers' and call the divideNumbers function
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  // Alternatively, you can use the arrow function for the event listener
  // document.querySelector('#divideNumbers').addEventListener('click', divideNumbersArrow);
  

/* Decision Structure */

// Add an event listener to the "Get Total Due" button
document.querySelector('#getTotal').addEventListener('click', calculateTotal);

// Function to calculate and display the total
function calculateTotal() {
  // Declare and instantiate a variable to store the numeric value entered by the user in the subtotal field
  let subtotalValue = parseFloat(document.querySelector('#subtotal').value) || 0;

  // Check if the membership checkbox has been checked
  let applyDiscount = document.querySelector('#member').checked;

  // Apply a 20% discount if the membership checkbox is checked
  if (applyDiscount) {
    subtotalValue *= 0.8; // Apply 20% discount
  }

  // Output the total to the total span in the format shown with two decimals using a template string
  let totalFormatted = `Total Due: $${subtotalValue.toFixed(2)}`;
  document.querySelector('#total').textContent = totalFormatted;
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of 'array'
document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
// Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of 'odds'
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0).join(', ');

/* Output Evens Only Array */
// Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of 'evens'
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', ');

/* Output Sum of Org. Array */
// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of 'sumOfArray'
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
// Use the map() array method to multiply each element by 2 and assign the result to the HTML element with an ID of 'multiplied'
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(', ');

/* Output Sum of Multiplied by 2 Array */
// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
// Assign the result to the HTML element with an ID of 'sumOfMultiplied'
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray
  .map(number => number * 2)
  .reduce((sum, number) => sum + number, 0);