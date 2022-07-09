import './style/style.css'
import "./assets/LOGO2x.png"
import { getMaxDigit, } from "./modules/function.js"
import { pairs } from "./modules/arrays.js"
import { getRandomArray } from "./modules/arraysMathod.js"
import { maxPrice } from "./modules/variables.js"
import { ukraine, getMyTaxes } from "./modules/fancProgramming.js"
import { createIdGenerator } from "./modules/generator.js"
import { sumNumbers } from "./modules/loops.js"
import { getSubjects } from "./modules/obj.js"
import { getRandomChinese } from "./modules/promises.js"
import { mariia } from "./modules/prototype.js"

console.log(`1) MaxDigit of 3458 : ${getMaxDigit(3458)}`)
console.log(`2) Pairs of student : ${JSON.stringify(pairs)}`)
console.log(`3) Random array : [${getRandomArray(7, 2, 15)}]`)
console.log(`4) Max Price of products is: ${maxPrice}`)
console.log(`5) My Taxes are : ${getMyTaxes.call(ukraine, 1400)}`)
console.log(`6) Generator Start : ${createIdGenerator().next().value}`)
console.log(`7) Sum of Numbers : ${sumNumbers(3, 7)}`)
console.log(`8) List of subjects : ${getSubjects(2)}`)
console.log(`9) Info about Mariia : ${'mariia.getInfo ==>', mariia.getInfo}`);
getRandomChinese(3).then((resolve) => console.log(`10) Chinese characters: ${resolve}`))








