// task 5 upskill

//create a function that will be able to convert figures from fahrenhei to celcius. 
function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}
var myTempInF = 98.6; // Declare variable for Fahrenheit temperature
var myTempInC = fahrenheitToCelsius(myTempInF); // Call the function
console.log(myTempInF + "°F" + " is " + myTempInC + "°C"); // Output the result

//fahrenheitToCelsius(98.6F)37C

//2.create a function that wiil calculated the average of numbers in an array
function calculateAverage(arr) {
  if (arr.length === 0) {
    return null;
  }
  const sum = arr.reduce((a, b) => a + b);
  return sum / arr.length;
}

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average); // Output: 3

//calculateAverag(1,2,3,4,5)3

//3. create a function that checks if a number .n is divisible by two numbers x andb y all inputs are positive, non zero digits
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(10, 2, 5)); // Output: true
console.log(isDivisible(10, 3, 5)); // Output: false

//isDivisible(n=x*y)true

//4. Create a function that will output the first 100 prime numbers.
function getPrimes(n) {
  let primes = [];
  for (let i = 2; primes.length < n; i++) {
      if (isPrime(i)) {
          primes.push(i);
      }
  }
  return primes;
}

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

console.log(getPrimes(100));

//getPrimes (2,3,5...97)


//5. Create a function that will return a boolean specifying if a number is a prime number.
function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

//isPrime(1)false

//6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function filterPositiveNumbers(arr) {
  return arr.filter(num => num > 0);
}

console.log(filterPositiveNumbers([-1, 2, -3, 4, -5])); // [2, 4]
console.log(filterPositiveNumbers([0, 1, 2, 3])); // [1, 2, 3]

//filterPositiveNumbers(-8,15,-9,78,0,67)=15,78,67

//7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints FizzBuzz"
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}



//8. The marketing team is spending way too much time typing in hashtags. Let's create a hashtag generator for them, our hashtag generator will meet the following criteria: It must start with a hash symbol, # Ignore all spaces in the input All words must have their first letter capitalized. If the final result is going to be longer than 140 characters, it should return false If the input or result is an empty string, it should return false

function generateHashtag(str) {
  if (!str) {
      return false;
  }

  let words = str.split(" ");
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  let hashtag = "#" + capitalizedWords.join("");

  if (hashtag.length > 140) {
      return false;
  }

  return hashtag;
}

console.log(generateHashtag("the marketing team is spending way too much time typing in hashtags")); // #TheMarketingTeamIsSpendingWayTooMuchTimeTypingInHashtags
console.log(generateHashtag("")); // false




//adding event listners
btn.addEventListener("click", ()=>{
  console.log("clicked");
})

// Creating variables for summoning elements
const btn = document.getElementById("btn")
const text = document.getElementById("text")
