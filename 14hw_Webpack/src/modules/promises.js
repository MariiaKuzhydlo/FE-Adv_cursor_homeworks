export async function getRandomChinese(length) {
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
