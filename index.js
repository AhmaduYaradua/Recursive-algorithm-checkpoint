// 1. function to check for a leap year usign the if statement
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}
console.log(checkLeapYear(2021));

// 2. Function to determine movie ticket price by age using switch statement
function ticketPrice(age) {
  let price;
  switch (true) {
    case age <= 12 && age > 0:
      price = 10;

      break;
    case age >= 13 && age <= 17:
      price = 15;
      break;
    case age >= 18:
      price = 20;
      break;
    default:
      age < 1;
      return "We dont sell tickets to robots Elon";
  }
  return `Your ticket price is $${price}`;
}
let age = prompt("Enter your age");
age = parseInt(age);
console.log(ticketPrice(age));

// ..........................................................................................

// 1. A recursive function to check if a string is a palindrome
function isPalindromeRecursive(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindromeRecursive(str.slice(1, -1));
  } else {
    return false;
  }
}
let str = "taboo";
console.log(
  `${str} is ${isPalindromeRecursive(str) ? "" : "not "}a palindrome`
);

// 2. A recursive function for a fibonacci sequence
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = 6;
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}`);
