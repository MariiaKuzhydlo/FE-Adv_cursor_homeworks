const keyPrefix = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

const getAudioNames = typeOfElements('Audio');
const getKeyNames = typeOfElements('Key');

const namesOfKey = getKeyNames(keyPrefix);
const namesOfAudio = getAudioNames(keyPrefix);

const keyElements = getAllElement(namesOfKey);
const audioElements = getAllElement(namesOfAudio);

const pairKeyAudio = createPairs(keyElements, audioElements);
pairKeyAudio.forEach(([key, audio]) => {
	key.addEventListener('click', () => {
		deactivateAll(audioElements);
		audio.play();
		removeClass(keyElements, 'active');
		addClass(key, 'active');
	})
});

document.addEventListener('keypress', checkPressedKey(audioElements, keyElements), false);

/*---------------- utilities ---------------------*/

function typeOfElements(type) {
	return function setPrefix(arr) {
		return arr.map(el => `${el}${type}`)
	}
}

function getAllElement(elementsName) {
	return elementsName.reduce((allEllements, name) => {
		allEllements.push(document.querySelector(`#${name}`))
		return allEllements;
	}, [])
}

function createPairs(keys, audios) {
	let pairs = [];
	for (let i = 0; i < keys.length; i++) {
		pairs.push([keys[i], audios[i]])
	}
	return pairs;
}

function checkPressedKey(audioList, keyList) {
	return function addEvent(event) {
		if (keyPrefix.includes(event.key)) {
			let audioForKeyBeenPressed = audioList.filter((el) => el.id[0] == event.key);
			deactivateAll(audioElements);
			audioForKeyBeenPressed[0].play();
			/*------- add/remove class active ---------*/
			let keyElementForKeyBeenPressed = keyList.filter((el) => el.id[0] == event.key);
			removeClass(keyList, 'active');
			addClass(keyElementForKeyBeenPressed[0], 'active');
		}
	}
}

function removeClass(arr, className) {
	arr.forEach((el) => el.classList.remove(className));
}
function addClass(elem, className) {
	elem.classList.add(className);
}
function deactivateAll(arr) {
	arr.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	})
}