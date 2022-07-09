export function getRandomArray(length, min, max) {
	const result = [];
	if (min > max) {
		return "The max value must be greater than the min.Enter correctly!"
	}
	for (let i = 0; i < length; i++) {
		result.push(Math.floor(min + Math.random() * (max + 1 - min)))
	} return result
}


export function getModa(numbers) {
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


export function getAverage(numbers) {
	const intNumbers = numbers.split(',').map((el) => Number(el)).filter((el) => parseInt(el) === el);
	const sum = intNumbers.reduce((sum, item) => sum += item, 0);
	return sum / intNumbers.length;
}


export function getMedian(numbers) {
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


export const filterEvenNumbers = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el % 2 === 1)


export const countPositiveNumbers = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el > 0).length;


export const getDividedByFive = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el % 5 === 0 && el !== 0);


export function replaceBadWords(string, censor) {
	console.log(censor);
	if (string === '') {
		return "You entered nothing"
	}
	const badWords = ['fuck', 'shit'];
	if (censor !== '') {
		censor.toLowerCase().split(',').forEach(item => badWords.push(item.trim()));
	}

	const wordsArray = string.toLowerCase().split(' ');
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


export function divideByThree(word) {
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


export const generateCombinations = (word) => {
	if (word.length > 10) {
		return "Too long word"
	}
	if (word.length <= 2) return word.length === 2 ? [word[0] + word[1], word[1] + word[0]].filter((el, pos, arr) => arr.indexOf(el) === pos) : [word];
	return word.split('').reduce((accumulator, letter, i) =>
		accumulator.concat(generateCombinations(word.slice(0, i) + word.slice(i + 1)).map(val => letter + val)), [])
		.filter((el, pos, arr) => arr.indexOf(el) === pos);
}