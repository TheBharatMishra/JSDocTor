/** @type {string} */
let yourString = "Bad String";

/**@type {number[]} */
let numbMe = [2, 3, 45, 5];

/**@type {{g:string , l:number}} */
let oBJ = { g: "lotus", l: 69 };

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/** @type {Point} */
let myPoint = { x: 10, y: 20 };

/**
 * @typedef {Object} BlogArticle
 * @property {string} title
 * @property {string} author
 * @property {string} content
 * @property {Date} date
 */

/**@type {BlogArticle} */
let blog = {
  title: "My Autobiography",
  author: "Bhanu Pandit",
  content: "Wow very dangerous. We love, we live, we life",
  date: new Date(),
};

/**@type {string|number} */
let eitherStringOrNumber = "42";

/**@typedef {boolean|string} BoolOrStr */

/**@type {BoolOrStr} */
let booleanOrString = "false";

/**
 * @param {string} param1
 * @param {number} [param2] - An optinal parameter enclosed by []
 * @returns {string}
 *
 */
function myFunction(param1, param2) {
  return param1 + (param2 || "");
}

/**@type {*} */
let anyGoes = "I can be anything";

/**
 * @type {(price:number,isOnSale:boolean)=>number}
 */
let calculateTotalPrice;

calculateTotalPrice = (price, isOnSale) => {
  const tax = 0.07;
  let discount = 0;

  if (isOnSale) {
    discount = 0.1;
  }

  return (price - price * discount) * (1 + tax);
};

/**
 * @param {import ("./declare").Car}car
 */
function printCarDetails(car) {
  console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
}
