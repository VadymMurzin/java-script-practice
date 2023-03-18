// let quantity = prompt("Choose quantity");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let width = '60px';
// width = Number.parseInt(width);
// console.log('width =', width, ';');

// let salary = 1456.45678;
// salary = salary.toFixed(2);
// salary = Number.parseFloat(salary)

// salary = Number.parseFloat(salary.toFixed(2))

// console.log(salary);

// let a = prompt("Введи число");
// a = Number(a);
// let b = prompt("Введи ступінь");
// b = Number(b);
// let c = Math.pow(a, b);
// console.log(c);

// const max = 70;
// const min = 20;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// const color = ['red', 'green', 'blue', 'yellow', 'grey', 'sky'];
// const max = color.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const bgcolor = color[index];

// console.log(bgcolor);

// document.body.style.backgroundColor = bgcolor;

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;

// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);

// const message = "JavaScript is in my blood wer";
// const pricePerWord = 10;

// let words = message.split(' ').length * pricePerWord;
// console.log(words);

// let title = "Arrays for begginers";

// let words = title.toLowerCase().split(' ').join('-');

// console.log(words);

//------------Exercise 2/16--------------//

// function makeArray(firstArray, secondArray, maxLength) {
//   if (firstArray.concat(secondArray).length === maxLength) {
//     return firstArray.concat(secondArray);
//   } else if (firstArray.concat(secondArray) !== maxLength) {
//     return firstArray.concat(secondArray).slice(0, maxLength);
//   }
// }

// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));

//------------Exercise 2/18--------------//

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(3));

//------------Exercise 2/21--------------//

// function findLongestWord(string) {
//   const words = string.toLowerCase().split(" ");
//   let maxWords = "";

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > maxWords.length) {
//       maxWords = words[i];
//     }
//   }
//   return maxWords;
// }

// console.log(findLongestWord("JavaScript is in my blood"));

//------------Exercise 2/22--------------//

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

console.log(createArrayOfNumbers(29, 34));
