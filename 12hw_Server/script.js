const icons = {
	male: 'img/gender/male-svgrepo-com.svg',
	female: 'img/gender/female-svgrepo-com.svg',
	gender: 'img/gender/settings-svgrepo-com.svg',
};

const filmsGetInfoSelectEl = document.querySelector("#filmsGetInfo");
const filmsGetInfoBtnEL = document.querySelector("#filmsGetInfoBtn");
const infoAboutFilmEl = document.querySelector("#infoAboutFilms");

function createTemplate(values) {
	const cardOfCharacter = document.createElement('div');
	cardOfCharacter.classList.add('characterCard');
	infoAboutFilmEl.insertAdjacentElement('beforeend', cardOfCharacter);

	const nameElem = document.createElement('div');
	nameElem.classList.add('name');
	nameElem.innerText = values.name;
	cardOfCharacter.insertAdjacentElement('beforeend', nameElem);


	const birthElem = document.createElement('div');
	birthElem.classList.add('birth');
	birthElem.innerText = values.birth_year;
	cardOfCharacter.insertAdjacentElement('beforeend', birthElem);

	const genderIcon =
		values.gender === 'male'
			? (gender = `<img src="${icons.male}" alt="mail">`)
			: values.gender === 'female'
				? (gender = `<img src="${icons.female}" alt="femail">`)
				: (gender = `<img src="${icons.gender}" alt="bi">`);

	const genderElem = document.createElement('span');
	genderElem.classList.add('gender');
	genderElem.innerHTML = genderIcon;
	cardOfCharacter.insertAdjacentElement('beforeend', genderElem);

}

const getData = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	return data;
};

async function getCharacters(num) {
	infoAboutFilmEl.innerHTML = "";
	const url = `https://swapi.dev/api/films/${num}`;
	const data = await getData(url);

	data.characters.forEach(async (person) => {
		const character = await getData(person);
		console.log(character)
		createTemplate(character);
	});
}
filmsGetInfoBtnEL.addEventListener("click", () => {
	getCharacters(filmsGetInfoSelectEl.value);
});


/*-------------------- 2 ----------------*/
let currentPage = 1;
let next = 1;
let previous = null;
const planetBlock = document.querySelector('.plannetsBlock');


async function getPlanet(current) {
	planetBlock.innerHTML = "";
	const url = `https://swapi.dev/api/planets/?page=${current}`;
	const data = await getData(url);
	data.results.forEach(async (planet) => {
		createPlanetTemplate(planet);
	})

	if (data.next) {
		let nextlink = data.next.split('').reverse();
		next = +nextlink[0];
	} else { next = data.next }

	if (data.previous) {
		let previousLink = data.previous.split('').reverse();
		previous = +previousLink[0];
	} else { previous = data.previous }
}

function createPlanetTemplate(value) {
	const planetElem = document.createElement('div');
	planetElem.classList.add('planetName');
	planetElem.innerText = value.name;
	planetBlock.insertAdjacentElement('beforeend', planetElem);
}

const getPlanetsButton = document.querySelector('.getPlanets');
getPlanetsButton.addEventListener('click', getPlanet.bind(null, currentPage));

/* ------------------- 3 ------------------*/

const getNextPlanetsButton = document.querySelector('.getNext');
getNextPlanetsButton.addEventListener('click', getNextPlanet);

const getPreviousButtons = document.querySelector('.getPrevious');
getPreviousButtons.addEventListener('click', getPreviousPlanet);

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
function getNextPlanet() {
	removeAllChildNodes(planetBlock);
	if (next) { getPlanet(next) }
	else {
		previous = 6;
		createPlanetTemplate({ name: "There is no next page" })
	}
}
function getPreviousPlanet() {
	removeAllChildNodes(planetBlock);
	if (previous) { getPlanet(previous) }
	else {
		next = 1;
		createPlanetTemplate({ name: "There is no previous page" })
	}
}