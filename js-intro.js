// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:


var mantra = "Be the dev"

// 1a. Write the code that returns 'B' from mantra.
console.log(mantra.charAt(0))
// 1b. Write the code that determines if there is an 'x' in mantra.
console.log(mantra.includes("x"))
// 1c. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes("v"))
// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.


// ---------------------------------------------------
// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

function length (dog, cat) {
    if (dog.length > cat.length){
        return dog
    }else {
        return cat
    }
}

console.log(length(myDog, myCat));
// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
let pet = [myDog,myCat]
console.log(pet)
// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.
// function lower (dog1,cat1) {
//     if(dog1 === "Snoopy"){
//     return dog1.tolowerCase()
// }else if (cat1 === "Garfield"){
//     return cat1.tolowerCase()
// }else{
//     return "hi"
// }
// }
// console.log(lower(myDog,myCat))

// -----------------------------------------------
// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
let seperate = myMessage.split("")
console.log(seperate);
for(i =0 ; i < seperate.length; i++)
    console.log(seperate[i]);
// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().


// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
var  testString= "thisisateststring"
let yup = testString.split("")

function remo (sep){
  for( let i =0 ; i < yup.length; i++)
  const win = yup.length[i]
  if(yup[i] === "a" || yup[i] === "e" || yup[i] ==="i" || yup[i] ===
"o" ||yup[i] === "u"){
return yup[i].join("")
}
}


    console.log(remo(yup))
// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.


// ----------------------------------------------
// Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]
cats =(...toonimals) => {
  const {animal} = toonimals
  for (let i = 0; i < toonimals.length; i++)
var array = {}
  if(animal === "cat"){
    return array
  }else{
    return "hi"
  }
}
console.log(cats(toonimals));
//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]
cats =(...toonimals) => {
  const {animal} = toonimals
  for (let i = 0; i < toonimals.length; i++)
  if(animal!=== "cat"){
    return array
  }else{
    return "hi"
  }
}
console.log(cats(toonimals));
//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
