const getRandomColor = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	const color = "#" + randomColor;
	return color;
}

function generateBlocks() {
	const colorsBlock = document.querySelector('.container');
	for (let i = 1; i <= 25; i++) {
		colorsBlock.insertAdjacentHTML('afterbegin', '<div class="square"></div>')
	}
	const square = document.querySelectorAll('.square');
	square.forEach((el) => el.style.backgroundColor = getRandomColor());
}

function generateBlocksInterval() {
	const colorsBlock = document.querySelector('.containerWithTimeOut');
	for (let i = 1; i <= 25; i++) {
		colorsBlock.insertAdjacentHTML('afterbegin', '<div class="squareWithTimeOut"></div>')
	}
	const square = document.querySelectorAll('.squareWithTimeOut');
	square.forEach((el) => setInterval(() => {
		el.style.backgroundColor = getRandomColor();
	}, 1000))
}