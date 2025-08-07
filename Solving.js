// Reverse a String

const DefaultString = "Hello";
const ReverseString = DefaultString.split("").reverse().join("");
console.log(ReverseString);

// Palindrome Checker

function PalindromeChecker(word) {
  const isPalindrome = word.split("").reverse().join("");
  return isPalindrome === word;
}
console.log(PalindromeChecker("madam"));
