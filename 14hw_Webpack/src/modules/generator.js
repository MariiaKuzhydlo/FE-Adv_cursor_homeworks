export function* createIdGenerator() {
	let i = 1;
	while (true) {
		yield i++;
	}
}



export function* newFontGenerator(fontSize = 14) {
	let result = yield fontSize;
	while (true) {
		if (result === 'up') {
			result = yield fontSize += 2;
		} else if (result === 'down') {
			result = yield fontSize -= 2;
		} else {
			result = yield fontSize;
		}
	}
}

