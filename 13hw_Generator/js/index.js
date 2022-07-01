import {
	genIdBtnEl,
	getGenResInfoEL,
	getUpFontSizeBtnEl,
	getDownFontSizeBtnEl,
	getGenFontSizeInfoEl,
	bodyEl,
} from "./elements.js";

import { idGenerator, fontGenerator } from "./function.js"


//-------1----------

genIdBtnEl.addEventListener("click", () => {
	getGenResInfoEL.textContent = idGenerator.next().value;
});

//-------2----------

getUpFontSizeBtnEl.addEventListener("click", () => {
	const fontSize = fontGenerator.next("up").value;
	bodyEl.style.fontSize = `${fontSize}px`;
	getGenFontSizeInfoEl.textContent = `${fontSize}px`;
});
getDownFontSizeBtnEl.addEventListener("click", () => {
	const fontSize = fontGenerator.next("down").value;
	bodyEl.style.fontSize = `${fontSize}px`;
	getGenFontSizeInfoEl.textContent = `${fontSize}px`;
});