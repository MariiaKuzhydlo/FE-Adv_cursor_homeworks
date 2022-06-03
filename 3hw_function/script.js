//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
const getMaxDigit = (number) => +Math.max(...(number + '').split(''));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function powFirst(x, n) {
	let pow = 1;
	if (n >= 0) {
		for (let i = 1; i <= n; i++) {
			pow *= x
		}
		return `${x}^${n} = ${pow}`;
	}
	else if (n < 0) {
		for (let i = 1; i <= -n; i++) {
			pow *= x
		}
		return `${x}^(${n}) = 1/${pow} = ${1 / pow}`;
	}
};


function powSecond(x, n) {
	if (n == 0) {
		return 1;
	} else if (n < 0) {
		return 1 / powSecond(x, -1 * n);
	}
	return (n == 1) ? x : x * powSecond(x, n - 1);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const firstLetterToUpperCase = (userName) => userName[0].toUpperCase() + userName.substring(1).toLowerCase();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
//const tax = (salary, taxRate ) => salary - salary * (parseFloat(taxRate) / 100);
function tax(salary, taxRate) {
	const getTax = salary - salary * (parseFloat(taxRate) / 100);
	if (taxRate == '' || salary == '') {
		return "please enter all data"
	} else {
		return getTax
	}

}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(letter, srt) {
	let count = 0;
	let position = srt.indexOf(letter);
	while (position !== -1) {
		count++;
		position = srt.indexOf(letter, position + 1);
	} return count;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.*/
function convertCurrency(money, exchangeRate) {
	const n = (parseInt(money) + '').split('').length
	const currency = money.split('').splice(n).join('');
	let result;
	let exchangCurr;
	if (currency.toLowerCase() === "uah") {
		result = (parseInt(money) / exchangeRate).toFixed(2);
		exchangCurr = "$";
	} else if (currency === "$") {
		result = (parseInt(money) * exchangeRate).toFixed(2);
		exchangCurr = "Uah";
	} else {
		return "This currency is not convertible";
	}
	return ` ${money} = ${result}${exchangCurr}`;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.*/
function getRandomPassword(length = 8) {
	let pas = '';
	for (let i = 0; i < length; i++) {
		pas += Math.trunc(Math.random() * 10)
	} return pas;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (letter, str) => str.split('').filter((newStr) => newStr.toLowerCase() != letter.toLowerCase()).join('');

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*10. Створіть функцію, яка перевіряє, чи є слово паліндромом. 
Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true*/
function isPalyndrom(str) {
	const arrLetters = str.split('').filter((el) => el !== " ").map((elem) => elem.toLowerCase());
	const shouldBeTheSame = Math.floor(arrLetters.length / 2)
	let isTheSame = 0;
	for (let i = 0; i < shouldBeTheSame; i++) {
		if (arrLetters[i] === arrLetters[arrLetters.length - (i + 1)]) {
			isTheSame++;
		}
	}
	return isTheSame === shouldBeTheSame;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим" */
function deleteDuplicateLetter(str) {
	const arr = str.toLowerCase().split('').filter((el) => el !== " "); //create an array, reduce all letters to lowercase without space
	if (arr.every((elem, index, arr) => arr.indexOf(elem) === index)) { //if all elements are unique then we return our string without changes
		return str;
	}
	else {
		const duplicated = arr.filter((elem, index, arr) => (arr.indexOf(elem) !== index));
		const duplicatedUnique = Array.from(new Set(duplicated));
		const unique = arr.filter((el) => !duplicatedUnique.includes(el));
		return unique.join('');
	}
}

//1

const Result1 = document.getElementById('Result1');
function getResult1() {
	let input = Number(document.getElementById("getMaxDigit").value);
	Result1.innerHTML = getMaxDigit(input);
}

//2
const Result2 = document.getElementById('Result2');
function getResult2() {
	let number = Number(document.getElementById("powNumber").value);
	let power = Math.round(Number(document.getElementById("powPower").value));
	Result2.innerHTML = powSecond(number, power);
}

//3
const Result3 = document.getElementById('Result3');
function getResult3() {
	let str = String(document.getElementById("firstLetterToUpperCase").value);
	Result3.innerHTML = firstLetterToUpperCase(str);
}

//4
const Result4 = document.getElementById('Result4');
function getResult4() {
	let taxSalary = Number(document.getElementById("taxSalary").value);
	let taxRate = String(document.getElementById("taxRate").value);
	Result4.innerHTML = tax(taxSalary, taxRate);
}

//5
const Result5 = document.getElementById('Result5');
function getResult5() {
	let inputNumber1 = Math.round(Number(document.getElementById("inputNumber1").value));
	let inputNumber2 = Math.round(Number(document.getElementById("inputNumber2").value));
	Result5.innerHTML = getRandomNumber(inputNumber1, inputNumber2);
}

//6
const Result6 = document.getElementById('Result6');
function getResult6() {
	let inputLetter = String(document.getElementById('inputLetter').value);
	let inputString = String(document.getElementById('inputString').value);
	Result6.innerHTML = countLetter(inputLetter, inputString);
}

//7
const Result7 = document.getElementById('Result7');
function getResult7() {
	let moneyConvertCurrency = String(document.getElementById("moneyConvertCurrency").value);
	let currencyConvertCurrency = Number(document.getElementById("currencyConvertCurrency").value);
	Result7.innerHTML = convertCurrency(moneyConvertCurrency, currencyConvertCurrency);
}

//8
const Result8 = document.getElementById('Result8');
function getResult8() {
	let inputNumber = Math.round(Number(document.getElementById("inputNumber").value));
	(inputNumber != 0) ? Result8.innerHTML = getRandomPassword(inputNumber) : Result8.innerHTML = getRandomPassword();
}

//9
const Result9 = document.getElementById('Result9');
function getResult9() {
	let letterDeleteLetters = String(document.getElementById("letterDeleteLetters").value);
	let wordDeleteLetters = String(document.getElementById("wordDeleteLetters").value);
	Result9.innerHTML = deleteLetters(letterDeleteLetters, wordDeleteLetters);
}

//10
const Result10 = document.getElementById('Result10');
function getResult10() {
	let wordIsPalyndrom = String(document.getElementById("wordIsPalyndrom").value);
	Result10.innerHTML = isPalyndrom(wordIsPalyndrom);
}

//11 
const Result11 = document.getElementById('Result11');
function getResult11() {
	let stringDeleteDuplicateLetter = String(document.getElementById("stringDeleteDuplicateLetter").value);
	Result11.innerHTML = deleteDuplicateLetter(stringDeleteDuplicateLetter);
}