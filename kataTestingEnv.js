// const isAnagram = (word1, word2) => {
//   return (
//     word1
//       .split("")
//       .sort()
//       .toString() ===
//     word2
//       .split("")
//       .sort()
//       .toString()
//   );
// };

// console.log(isAnagram("bobo", "obob"), "true");
// console.log(isAnagram("bobo", "boo4b"), "false");
// console.log(isAnagram("dog", "god"), "true");
// console.log(isAnagram("gabety", "gabmen"), "false");
// console.log(isAnagram("qwertyuiop", "poiuytrewq"), "true");
// console.log(isAnagram("qwertyuiop", "asdfghjkl"), "false");

// findRowSum = n => {
//   startingOddNumberIndex = (n * (n - 1)) / 2;
//   endingOddNumberIndex = startingOddNumberIndex + n;
//   let sum = 0;
//   for (let i = startingOddNumberIndex + 1; i < endingOddNumberIndex + 1; i++) {
//     sum = sum + Math.abs(i * 2 - 1);
//   }
//   return sum;
// };

// console.log(findRowSum(42));

// findSumOfPrecedingValues = (array, maxIndex) => {
//   let sum = 0;
//   for (let index = 0; index < maxIndex; index++) {
//     sum += array[index];
//   }
//   return sum;
// };

// findSumOfFollowingValues = (array, minIndex) => {
//   let sum = 0;
//   for (let index = minIndex + 1; index < array.length; index++) {
//     sum += array[index];
//   }
//   return sum;
// };

// let array = [1, 2, 3, 4, 5, 6];
// console.log(findSumOfFollowingValues(array, 3));

// findEvenIndex = arr => {
//   index = arr.findIndex(
//     (value, index) =>
//       findSumOfPrecedingValues(arr, index) ===
//       findSumOfFollowingValues(arr, index)
//   );
//   return index === null ? -1 : index;
// };

// descendingOrder = n => {
//   return parseInt(
//     String(n)
//       .split("")
//       .sort()
//       .reverse()
//       .join("")
//   );
// };
// console.log(descendingOrder(111342));

// sumTwoSmallestNumbers = numbers => {
//   numbers = numbers
//     .filter(num => num > 0 && Math.round(num) === num)
//     .sort((a, b) => a - b);
//   console.log(numbers);
//   return numbers[0] + numbers[1];
// };
// let numbersArray = [15, 28, 2.5, 4, 2, 43];
// console.log(sumTwoSmallestNumbers(numbersArray));

findMissingLetters = array => {
  let lowerCaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let upperCaseArray = lowerCaseArray.slice(0);
  for (let index = 0; index < upperCaseArray.length; index++) {
    upperCaseArray.splice(index, 1, upperCaseArray[index].toUpperCase());
  }
  let firstLetter = array[0];
  console.log(firstLetter);
  let relevantAlphabet =
    firstLetter.toUpperCase() !== firstLetter ? lowerCaseArray : upperCaseArray;
  console.log(firstLetter.toUpperCase === firstLetter);
  console.log(relevantAlphabet);
  startingIndex = relevantAlphabet.findIndex(letter => letter === firstLetter);
  endingIndex = startingIndex + array.length;
  relevantLetters = relevantAlphabet.slice(startingIndex, endingIndex + 1);
  let letter = relevantLetters.find((letter, index) => letter !== array[index]);
  return letter;
};

array = ["O", "Q", "R", "S"];
console.log(findMissingLetters(array));
