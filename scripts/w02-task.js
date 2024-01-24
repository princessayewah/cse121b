/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// Variable to hold your name
const fullName = 'Ayewah Eboisetale Princess' ;
// Variable to hold the current year
const currentYear = new Date().getFullYear();
// Variable to hold the file path and file name of the profile picture
const profilePicture = 'images/imageofme.jpg';

/* Step 3 - Element Variables */
// Using getElementById to get the element with id "food" and storing it in a const variable named "foodElement"
const foodElement = document.getElementById('food');

// Using querySelector to get the element with id "year" and storing it in a variable named "yearElement"
const yearElement = document.querySelector('#year');

// Using any viable method to get the profile image element and storing it in a variable named "imageElement"
const imageElement = document.querySelector('img[src="images/imageofme.jpg"]');

/* Step 4 - Adding Content */
// Assigning the textContent property to set the value of the element to the value of the variable currentYear
yearElement.textContent = currentYear;

// Using the setAttribute method to set the src property of the image element to the file path variable
imageElement.setAttribute('src', profilePicture);

// Using the setAttribute method to set the alt property of the image element
// Using a template literal to create the alt text with the name variable
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
// Declare an array variable to hold your favorite foods
const favFoodsArray = ['Pizza', 'Ice Cream', 'Sushi', 'Chocolate'];

// Modify the HTML element with the id of food to display your favorite foods array
foodElement.innerHTML = favFoodsArray.join('<br>');

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Burgers';

// Add the value stored in this new variable to your favorite food array using the push() method
favFoodsArray.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
foodElement.innerHTML += `<br>${favFoodsArray.join('<br>')}`;

// Remove the first element in the favorite food array
favFoodsArray.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favFoodsArray.join('<br>')}`;

// Remove the last element in the favorite food array
favFoodsArray.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favFoodsArray.join('<br>')}`;






