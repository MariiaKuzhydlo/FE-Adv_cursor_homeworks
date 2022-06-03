//1. Створіть функцію getRandomArray(length, min, max) – 
// яка повертає масив випадкових цілих чисел. 
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, 
// max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> 
// [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max) {
	const result = [];
	if (min > max) {
		return "The max value must be greater than the min.Enter correctly!"
	}
	for (let i = 0; i < length; i++) {
		result.push(Math.floor(min + Math.random() * (max + 1 - min)))
	} return result
}


//2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getModa(numbers) {
	if (numbers === '') {
		return "You entered nothing"
	}
	const intNumbers = numbers.split(',').map((el) => Number(el)).filter((el) => parseInt(el) === el);
	const pairsElemAndFrequency = intNumbers.map(function (item, index, arr) {
		return [item, arr.filter((elem) => item === elem).length]
	}); //create a pair [value, frequency]

	if (pairsElemAndFrequency.every((item) => item[1] === 1)) {
		return "All values are unique"
	}
	const modaPair = pairsElemAndFrequency.sort((a, b) => a[1] - b[1]).pop();
	const mostFrequency = modaPair[1];
	const resultModa = Array.from(new Set(pairsElemAndFrequency.filter((el) => el[1] === mostFrequency).map((el) => el[0])));
	return resultModa;
}


//3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. 
//НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getAverage(numbers) {
	const intNumbers = numbers.split(',').map((el) => Number(el)).filter((el) => parseInt(el) === el);
	const sum = intNumbers.reduce((sum, item) => sum += item, 0);
	return sum / intNumbers.length;
}


//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. 
//НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getMedian(numbers) {
	const intNumbers = numbers.split(',').map((el) => Number(el)).filter((el) => parseInt(el) === el);
	const sortNumbers = intNumbers.sort((a, b) => a - b);
	if (sortNumbers.length % 2 === 0) {
		return (sortNumbers[sortNumbers.length / 2] + sortNumbers[(sortNumbers.length / 2) - 1]) / 2;
	}
	else if (sortNumbers.length % 2 === 1) {
		return sortNumbers[Math.floor(sortNumbers.length / 2)]
	}
	else {
		return []
	}
}

//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el % 2 === 1)


//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el > 0).length;

//7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el % 5 === 0 && el !== 0);

//8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), 
//після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.

function replaceBadWords(string, censor) {
	console.log(censor);
	if (string === '') {
		return "You entered nothing"
	}
	const badWords = ['fuck', 'shit'];
	if (censor !== '') {
		censor.split(',').forEach(item => badWords.push(item.trim()));
	}

	const wordsArray = string.split(' ');
	const res = wordsArray.map(function (el) {
		for (let badItem of badWords) {
			if (el.search(badItem) !== -1) {
				const elArr = el.split(badItem);
				return elArr.join('***');
			}
		}
		return el;
	})
	return res.join(' ');

}


//9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. 
//Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.

function divideByThree(word) {
	if (word.split('').length < 3) {
		return "Less than three letters in this word"
	}
	else {
		const result = [];
		const letters = word.toLowerCase().split('').filter((el) => el !== ' ');
		letters.forEach((el, i, arr) => result.push(arr.splice(i, 3, 0).join('')));
		return result;
	}
}

//10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
//Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. 


const generateCombinations = (word) => {
	if (word.length > 10) {
		return "Too long word"
	}
	if (word.length <= 2) return word.length === 2 ? [word[0] + word[1], word[1] + word[0]] : [word];
	return word.split('').reduce((accumulator, letter, i) =>
		accumulator.concat(generateCombinations(word.slice(0, i) + word.slice(i + 1)).map(val => letter + val)), []);
}


//-------HTML-----------

//1
const Result1 = document.getElementById("Result1");
function getResult1() {
	const length = Number(document.getElementById("arrLength").value);
	const min = Number(document.getElementById("minNumber").value);
	const max = Number(document.getElementById("maxNumber").value);
	const result = JSON.stringify(getRandomArray(length, min, max));
	Result1.innerHTML = result;
}

//2 
const Result2 = document.getElementById('Result2');
function getResult2() {
	const numbers = document.getElementById("arrNumbers").value;
	Result2.innerHTML = JSON.stringify(getModa(numbers));
}

//3
const Result3 = document.getElementById('Result3');
function getResult3() {
	const numbers = document.getElementById("arrNumbersAvarage").value;
	Result3.innerHTML = getAverage(numbers);
}

//4
const Result4 = document.getElementById('Result4');
function getResult4() {
	const numbers = document.getElementById("arrNumbersMedian").value;
	Result4.innerHTML = getMedian(numbers);
}

//5
const Result5 = document.getElementById('Result5');
function getResult5() {
	const numbers = document.getElementById("arrfilterEvenNumbers").value;
	Result5.innerHTML = JSON.stringify(filterEvenNumbers(numbers));
}

//6
const Result6 = document.getElementById('Result6');
function getResult6() {
	const numbers = document.getElementById("arrPositiveNumbers").value;
	Result6.innerHTML = countPositiveNumbers(numbers);
}

//7
const Result7 = document.getElementById('Result7');
function getResult7() {
	const numbers = document.getElementById("arrDividedByFiveNumbers").value;
	Result7.innerHTML = JSON.stringify(getDividedByFive(numbers));
}

//8
const Result8 = document.getElementById('Result8');
function getResult8() {
	let strReplaceBadWords = String(document.getElementById("strReplaceBadWords").value);
	let addBadWord = String(document.getElementById("addBadWord").value);
	Result8.innerHTML = replaceBadWords(strReplaceBadWords, addBadWord);
}

//9
const Result9 = document.getElementById('Result9');
function getResult9() {
	let wordForDivide = String(document.getElementById("wordForDivide").value);
	Result9.innerHTML = JSON.stringify(divideByThree(wordForDivide));
}

//10
const Result10 = document.getElementById('Result10');
function getResult10() {
	let wordForCombination = String(document.getElementById("wordForCombination").value);
	Result10.innerHTML = JSON.stringify(generateCombinations(wordForCombination));
}
