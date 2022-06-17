const color = () => Math.floor(Math.random() * 256);
const getRandomColor = () => `rgb(${color()} ${color()} ${color()})`;

function generateBlocks() {
	const colorsBlock = document.querySelector('.container');
	for (let i = 1; i <= 25; i++) {
		colorsBlock.insertAdjacentHTML('afterbegin', '<div class="square"></div>')
	}
	const square = document.querySelectorAll('.square');
	square.forEach((el) => el.style.backgroundColor = getRandomColor());
}

function generateBlocksInterval() {
	const square = document.querySelectorAll('.square');
	square.forEach((el) => setInterval(() => {
		el.style.backgroundColor = getRandomColor();
	}, 1000))
}