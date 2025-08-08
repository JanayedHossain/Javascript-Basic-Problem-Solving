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

// Count Vowels
function vowelCount(word) {
  const vowel = "aeiouAEIOU";
  const Letter = word.split("");
  let totalVowel = 0;
  for (let x of Letter) {
    if (vowel.split("").includes(x)) {
      totalVowel = totalVowel + 1;
    }
  }
  console.log(totalVowel);
}

vowelCount("rakiiib");

//Check if Two Strings Are Anagrams

function checkAnagrams(firstWord, secondWord) {
  return (
    firstWord.split("").sort().join("") === secondWord.split("").sort().join("")
  );
}
console.log(checkAnagrams("listen", "silent"));

// FizzBuzzProblem

function FizzBuzzProblem(endNumber) {
  let resultArray = [];
  for (let i = 1; i <= endNumber; i++) {
    let num = i;
    if (i % 3 === 0 && i % 5 === 0) {
      num = "FizzBuzz";
    } else if (i % 3 === 0) {
      num = "Fizz";
    } else if (i % 5 === 0) {
      num = "Buzz";
    }
    resultArray.push(num);
  }
  console.log(resultArray);
}
FizzBuzzProblem(15);
