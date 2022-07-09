export const getMaxDigit = (number) => +Math.max(...(number + '').split(''));

export function powFirst(x, n) {
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

export const firstLetterToUpperCase = (userName) => userName[0].toUpperCase() + userName.substring(1).toLowerCase();

export function tax(salary, taxRate) {
	const getTax = salary - salary * (parseFloat(taxRate) / 100);
	if (taxRate == '' || salary == '') {
		return "please enter all data"
	} else {
		return getTax
	}

}

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function countLetter(letter, srt) {
	let count = 0;
	let position = srt.indexOf(letter);
	while (position !== -1) {
		count++;
		position = srt.indexOf(letter, position + 1);
	} return count;
}

export function convertCurrency(money, exchangeRate) {
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

export function getRandomPassword(length = 8) {
	let pas = '';
	for (let i = 0; i < length; i++) {
		pas += Math.trunc(Math.random() * 10)
	} return pas;
}

export function isPalyndrom(str) {
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

export function deleteDuplicateLetter(str) {
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