// // DESTRUCTURING OBJ \\
// // to write shot-hand code and reassign values
// const PERSONALINFORMATION = {
//     firstName: "Stan",
//     lastName: "Goldyn",
//     city: "Midland",
//     state: "Michigan",
//     zipCode: 48640
// }

// // typical example of accessing firstName & lastName variables from PERSONALINFORMATION
// // we will be using template literals or string coorelation to output the const to console
// const {firstName, lastName} = PERSONALINFORMATION;
// console.log(`${firstName} ${lastName}`);

// // here we can reassign firstName & lastName to new variables for shorthand and simplicity
// const {firstName: fn, lastName: ln} = PERSONALINFORMATION;
// console.log(`${fn} ${ln}`);

// // DESTRUCTING ARRAYS \\
// // the goal is to get pointers to all indexes so modification/calling is simple
// // here is a standard array - we can assign array values to ...
// let names = ["stan", "coding n00b", "goldyn"];

// let [firstName, middleName, lastName] = ["stan", "coding n00b", "goldyn"];
// console.log(lastName); // will output "goldyn"

// // you now can make changes to the array key value without using typical array methods
// lastName = "ostergren"
// console.log(lastName); // will output "ostergren"

// // OBJECT LITERALS \\
// // if the keys of an object are the same that are being passed in you don't need to set it
// function addressMaker(city, state) {
//     const newAddress = {city, state};

//     console.log(newAddress);
// }

// addressMaker("Lansing", "Michigan");

// // OBJECT LITERALS CHALLENGE \\
// // the goal is to console log the new city, state and country

// function addressMaker(address) {
//     const {city, state} = address;
//     //destructuring the object and removes the need to type address.city below

//     const newAddress = {
//         city, // originally city: address.city
//         state, // origianlly state: address.state
//         country: 'United States'
//     };

//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
// }

// addressMaker({city: 'Lansing', state: 'Michigan'});

// // FOR OF LOOP \\
// // treat this as iterable-only; you cannot update value of the interable as you could normally // // in a foor loop
//
// // can be used with anything that is iterable; example an array...
// let incomes = [55000, 60500, 63500];
// let total = 0;

// for (const income of incomes) {
//     console.log(income);
//     //console.log(total += income);
// }
// // you can also iterate through a string
// let fullName = "Stan Coding n00b Goldyn";

// for (const letter of fullName) {
//     console.log(letter);
// }
// // SPREAD OPERATOR \\
// // will expand and array/object and copy values to a new destination such as another array
// // https://codeburst.io/javascript-the-spread-operator-a867a71668ca

// let array1 = [1, 2, 3, 4, 5];
// let array2 = array1;
// // array2 will be assigned reference to array1; any changes to array1 will replicate into array2

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [...array1];
// // this will expand array1 into array2 and array2 is a new, unreferenced copy of array1

// var str = "hello";
// var chars = [...str];
// console.log(chars);
// //can be used with string to produce arrays; above example would output ['h', 'e',' l',' l', 'o']

// // REST OPERATOR \\
// // use when it is unknown how many values/arguments are going to be passed into a function
// function add(...nums) {
//     // the rest operator is added to the funcation agurments to allow any number to be passed in
//     console.log(nums);
// }
// // without the rest operator only '4' would be printed.
// add(4, 8, 12, 16, 20);

// // ARROW FUNCTIONS \\
// // consolidate boiler-plate callback function syntax with =>

// // standard way of using callback function...
// function add(...nums) {
//     let total = nums.reduce(function (x, y) {
//         return x + y;
//     });
//     console.log(total);
// }

// // we can condense the callback function to => and as this is a single line return function
// // we can also remoe 'return', braces and semicolon.
// function add(...nums) {
//     let total = nums.reduce((x, y) => x + y)
//     console.log(total);
// }

// add(4, 8, 12, 16, 20);

// // PADSTART, PADEND \\
// // can add to the start & end of a string given a specific max length of string

// let name = "stan";
// console.log(name.padStart(10, 's-'));
// // the value '10' is the max length of the outputted string

// CLASSES \\
// May need to revisit this when tackling JS OOP in FCC
// export class Animal {
//     // constructor is needed to create and initialize objects in a class
//     // only one constructor per class
//     constructor(type, legs) {
//         this.type = type;
//         this.legs = legs;
//     }
//     // this is a method bound to objects that are created from this class.  IE: cat object below
//     makeNoise(sound = 'Loud Noise') {
//         console.log(sound);
//     }

//     // this is a method bound to the entire class and not an instantiated object.
//     static return10() {
//         return 10;
//     }

//     // get allows you to pull/retreive data from this function.  set would allow you to change it'
//     // values; this method(s) is bound to objects created by this class. IE: cat object below
//     get metaData() {
//         return `Type: ${this.type}, Legs: ${this.legs}`;
//     }
// }

// // exmaples of using the class properties below:
// let cat = new Animal('Cat', 4);

// console.log(cat.type);  // outputs 'Cat'
// console.log(cat.makeNoise("Meow")); //calling the method tied to the object cat
// console.log(Animal.return10()); // calling the method tied to the class Animal
// console.log(cat.metaData); // outputs Type & Legs with values
