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

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(29, 34));

//------------Exercise 2/23--------------//

// function filterArray(numbers, value) {
//   const numArray = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       numArray.push(numbers[i]);
//     }
//   }
//   return numArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8], 7));

//------------Exercise 2/25--------------//

// function getCommonElements(array1, array2) {
//   const numArray = [];

//   for (let i = 0; i <= array1.length; i++) {
//     if (array2.includes(array1[i])) numArray.push(array1[i]);
//   }

//   return numArray;
// }

// console.log(getCommonElements([1, 2, 3, 4, 5, 6, 7, 8], [3, 5, 9, 6]));

// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i of numbers) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (let key in values) {
//     if (typeof values[key] === "number") {
//       totalSalary += values[key];
//     }
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // // Change code below this line
// // const keys = Object.keys(apartment);
// // const values = Object.values(apartment);

// for (const key of colors) {
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     return this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// console.log(addPotion("Invisibility"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionIndex = this.potions.findIndex(
//       (potion) => potion.name === newPotion.name
//     );

//     if (potionIndex !== -1) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(
//       (potion) => potion.name === potionName
//     );

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potion = this.potions.find((potion) => potion.name === oldName);

//     if (!potion) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     potion.name = newName;
//   },
//   // Change code above this line
// };

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function changeEven(numbers, value) {
//   const arr = [];

//   numbers.forEach((number) => {
//     arr.push(number);

//   });

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) {
//       arr[i] = arr[i] + value;
//     }
//   }

//   // numbers.forEach((number) => {
//   //   if (number % 2 === 0) {
//   //     console.log(newArrayNumbers.push(number + value));
//   //   }
//   // });

//   return arr;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, { playtime, gamesPlayed }) => {
//     return total + playtime / gamesPlayed;
//   },
//   0
// );

// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter((user) => user.rating > MIN_BOOK_RATING)
//   .map((name) => name.author);

// console.log(names);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// const getNamesSortedByFriendCount = (users) => {
//   return [...users].sort(
//     (firstFriends, secondFriends) =>
//       secondFriends.friends.length - firstFriends.friends.length
//   );
// };

console.log(
  [...users]
    .filter((user) => user.gender === "male")
    .reduce((previousValue, number) => {
      return previousValue + number.balance;
    }, 0)
);
