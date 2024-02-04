/* LESSON 3 - Programming Tasks */

/* Profile Object  */

// Declare a new object literal variable named myProfile and assign an empty object to the variable.
let myProfile = {};

// Add a property to this object literal named name and set its value to be your name as a string.
myProfile.name = "Ayewah Eboisetale Princess";

// Add a property named photo. Set its value to be an image's path and name (one used in Programming Task 2) as a string.
myProfile.photo = "images/imageofme.jpg";

// Add a property named favoriteFoods. Set its value to be an array of your favorite foods as strings.
myProfile.favoriteFoods = [
    'Pizza', 
    'Ice Cream',
    'Sushi', 
    'Chocolate'
];

// Add a property named hobbies. Set its value to be an array of your hobbies as strings.
myProfile.hobbies = ['Reading', 'Traveling', 'Coding'];

// Add a property named placesLived. Set its value to be an empty array.
myProfile.placesLived = [];



/* Populate Profile Object with placesLive objects */

// Using code outside of the myProfile definition, add an item to the placesLived array where this new item itself is an object with two properties: place and length, and for each of these properties, add appropriate values as strings.
myProfile.placesLived.push(
    {
      place: 'Asaba, NG',
      length: '13 years'
    }
  );
  
  // Add additional object literals with appropriate values to the placesLived array for each place you have lived.
  myProfile.placesLived.push(
    {
      place: 'San Francisco, CA',
      length: '1 year'
    },
    {
      place: 'Lagos, NG',
      length: '4 years'
    }
  );
  
  // Now, myProfile object should contain all the specified information.
  console.log(myProfile);


/* DOM Manipulation - Output */

/* Name */
// Assign the value of the name property of the myProfile object to the HTML element with an ID of name.
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo.
document.querySelector('#photo').src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
// For each favorite food in the favoriteFoods property,
myProfile.favoriteFoods.forEach((food) => {
    // create an HTML <li> element
    const li = document.createElement('li');
    
    // place the value of the favoriteFoods array element into the textContent of this new li element
    li.textContent = food;
  
    // append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
// Repeat the previous process of creating a list of items for each hobby in the hobbies property of the object and appending each item to the HTML <ul> element with an ID of hobbies.
myProfile.hobbies.forEach((hobby) => {
    const li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
// For each object in the placesLived property:
myProfile.placesLived.forEach((place) => {
    // Create an HTML <dt> element and put its place property in the <dt> element.
    const dt = document.createElement('dt');
    dt.textContent = place.place;
  
    // Create an HTML <dd> element and put its length property in the <dd> element.
    const dd = document.createElement('dd');
    dd.textContent = place.length;
  
    // Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived.
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });

