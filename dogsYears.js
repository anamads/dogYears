// My age 
const myAge = 32;
// First 2 years of dog's life. This value will change
let earlyYears = 2;
earlyYears *= 10.5;
// Accounting for years after first two years. This value can change
let laterYears = myAge - 2;
// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Anastasia'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
