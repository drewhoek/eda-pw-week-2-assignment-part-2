// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We define a variable called name and set it equal to the string 'Dane'.
// We then create a conditional that says if the variable name is 100% equal to the string 'Mary' then we output the string 'Hi, Mary!' to the console.
// The else statement after that says that if the string is equal to anything else it will output the string 'How do you do?' to the console.
// This conditional will output the 'How do you do?' string to the console because the string 'Dane' is not === to 'Mary'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We name a variable secret but do not set it equal to any value.
// Next we define a variable code and set it equal to the integer 123.
// We then create a conditional that states if the variable code is exactly equal to 123 then we will execute a few things. 
// The variable secret will now be equal to the string 'super' and the variable code will multiply by 2. 
// code is now equal to the integer 246.
// We then create a second conditional that checks if the variable code is greater than 250.
// If that is true then the variable secret is updated to the string 'duper'. 
// This is false so the variable secret will remain equal to the string 'super'.
// We then console.log the variable secret and the string 'super' would be outputed to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We define 3 variables to start. We set the variable isStudent equal to the boolean true, 
// the variable age equal to the integer 34 and the variable zip equal to the integer 55407.
// We then create a conditional that first checks if the variable isStudent is true AND zip is greater than 80000. 
// If both are true then we will output the string 'You're a student on the West Coast!' to the console. This will not output.
// We then get a series of else if statements that will output different strings if the previous statements are false.
// The first else if statement checks if the variable isStudent is equal to false OR if the variable age is less than 30. 
// If this is true then the string 'What are your hobbies?' will output to the console. This will also not output.
// The next else if statement checks if the variable isStudent is equal to true. 
// If this statement is true the string 'Welcome to Prime!' will output to the console. This will output to the console.
// The last else statement will output the string 'How about the weather?' to the console if none of the above statements are true. 
// This line will not be run as the previous else if statement was true.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne and ColorTwo are flipped, colorOne should be blue and colorTwo should be red according to the instructions.
// this function still works correctly as written but is important to have the values assigned to the correct variables if further code is written.
// The other mistake in this statement is that we are missing an assignment for colorTwo after the conditional.
// We have set colorOne equal to purple but now need a result for colorTwo as well. This could also be assigned to the value of 'purple'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - we are checking for an AND statement and it is currently an OR statement.
// if statemtent should say if (temp > 39 && time >= 4) {
// Current code will output the same thing in the console but we need to evaluate both variable not one or the other.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - this function is checking if minAge is less than or equal to age not if age is greater than or equal to minAge.
// The other incorrect statement is that the first if statement should return 'entry' instead of 'no entry' 
// because if minAge is less than or equal to age then entry would be allowed.
// Fix is also easier to read according to description.
// Correct statement should say: 
// if (age >= minAge) {
      console.log('entry');
    } else {
      console.log('no entry')
    }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
