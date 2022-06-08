const students = [{
	name: "Tanya",
	course: 3,
	subjects: {
		math: [4, 4, 3, 4],
		algorithms: [3, 3, 3, 4, 4, 4],
		data_science: [5, 5, 3, 4]
	}
}, {
	name: "Victor",
	course: 4,
	subjects: {
		physics: [5, 5, 5, 3],
		economics: [2, 3, 3, 3, 3, 5],
		geometry: [5, 5, 2, 3, 5]
	}
}, {
	name: "Anton",
	course: 2,
	subjects: {
		statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
		english: [5, 3],
		cosmology: [5, 5, 5, 5]
	}
}];

//1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - 
//яка повертає список предметів для конкретного студента. 
//Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(studentIndex) {
	const listOfSubjects = Object.keys(students[studentIndex].subjects);
	const result = listOfSubjects.map((el) => {
		const arrItem = el.split('');
		const firstLetter = arrItem[0].toUpperCase();
		arrItem.splice(0, 1, firstLetter);
		if (arrItem.includes('_')) {
			arrItem.splice(arrItem.indexOf('_'), 1, ' ')
		}
		return arrItem.join('')
	});
	return result
}

console.log('/---------- 1 ---------/');
console.log('getSubjects(0) ==>', getSubjects(0));
console.log('getSubjects(1) ==>', getSubjects(1));
console.log('getSubjects(2) ==>', getSubjects(2));

//2. Створіть функцію getAverageMark(students[0]) --> 3.79 – 
//яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
//Оцінку округліть до 2ого знаку. 

function getAverageMark(studentIndex) {
	const listOfMarks = Object.values(students[studentIndex].subjects);
	const totalSum = listOfMarks.reduce(function (total, item) {
		return total += item.reduce((sum, mark) => sum += mark, 0);
	}, 0);
	let amountOfMarks = 0;
	listOfMarks.forEach((el) => amountOfMarks += el.length);

	return (totalSum / amountOfMarks).toFixed(2);
}

console.log('/---------- 2 ----------/');
console.log('getAverageMark(0) ==>', getAverageMark(0));
console.log('getAverageMark(1) ==>', getAverageMark(1));
console.log('getAverageMark(2) ==>', getAverageMark(2));

//3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} –
//яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
//ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(studentIndex) {
	const student = students[studentIndex];
	const { name, course } = student;
	const result = {};
	result.course = course;
	result.name = name;
	result.getAverageMark = getAverageMark(studentIndex);
	return result;
}

console.log('/---------- 3 ----------/');
console.log('getStudentInfo(0) ==>', getStudentInfo(0));
console.log('getStudentInfo(1) ==>', getStudentInfo(1));
console.log('getStudentInfo(2) ==>', getStudentInfo(2));

//4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – 
//яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
	const names = []
	students.forEach((el) => names.push(el.name))
	return names.sort();
}

console.log('/---------- 4 ----------/');
console.log('getStudentsNames(students) ==> ', getStudentsNames(students));


//5. Створіть функцію getBestStudent(students) --> "Anton" – 
//яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
	const res = [];
	students.forEach((item, index) => res.push(+getAverageMark(index)))
	const maxGrade = Math.max(...res);
	const bestStudent = students[res.indexOf(maxGrade)].name;
	return bestStudent;
}
console.log('/---------- 5 ----------/');
console.log('getBestStudent(students) ==>', getBestStudent(students));

//6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } –
//яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(string) {
	const letters = string.split('');
	const res = {};
	letters.forEach(function (item) {
		if (item in res) {
			res[item] += 1;
		}
		else {
			res[item] = 1;
		}
	})
	return res;
}

console.log('/---------- 6 ----------/');
console.log('calculateWordLetters("тест") ==>', calculateWordLetters("тест"));
console.log('calculateWordLetters("дезоксиребуноклеїнова") ==>', calculateWordLetters("дезоксиребуноклеїнова"));