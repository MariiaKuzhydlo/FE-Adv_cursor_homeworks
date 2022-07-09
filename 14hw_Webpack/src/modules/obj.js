export const students = [{
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


export function getSubjects(studentIndex) {
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



export function getAverageMark(studentIndex) {
	const listOfMarks = Object.values(students[studentIndex].subjects);
	const totalSum = listOfMarks.reduce(function (total, item) {
		return total += item.reduce((sum, mark) => sum += mark, 0);
	}, 0);
	let amountOfMarks = 0;
	listOfMarks.forEach((el) => amountOfMarks += el.length);

	return (totalSum / amountOfMarks).toFixed(2);
}


export function getStudentInfo(studentIndex) {
	const student = students[studentIndex];
	const { name, course } = student;
	const result = {};
	result.course = course;
	result.name = name;
	result.getAverageMark = getAverageMark(studentIndex);
	return result;
}



export function getStudentsNames(students) {
	const names = []
	students.forEach((el) => names.push(el.name))
	return names.sort();
}


export function getBestStudent(students) {
	const res = [];
	students.forEach((item, index) => res.push(+getAverageMark(index)))
	const maxGrade = Math.max(...res);
	const bestStudent = students[res.indexOf(maxGrade)].name;
	return bestStudent;
}


export function calculateWordLetters(string) {
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