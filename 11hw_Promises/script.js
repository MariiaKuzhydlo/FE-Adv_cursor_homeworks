let hieroglyphsNumber;

do {
	hieroglyphsNumber = +prompt('Enter number of hieroglyphs', 'Enter integer number from 1 to 150');
} while (hieroglyphsNumber < 0 || hieroglyphsNumber > 150 || parseInt(hieroglyphsNumber) !== hieroglyphsNumber)

async function getRandomChinese(length) {
	let res = [];
	while (length) {
		let promise = new Promise((resolve) => {
			setTimeout(() => {
				let charCode = Date.now() % 1e5;
				let randomChinese = String.fromCharCode(charCode);
				resolve(randomChinese); // promise after 50ms return char
			}, 50)
		})
		let chinese = await promise; // whait for result of promise
		res.push(chinese);
		length--;
	}
	return res.join(' '); // return promise because of async
}

getRandomChinese(hieroglyphsNumber).then((resolve) => console.log(resolve)) 