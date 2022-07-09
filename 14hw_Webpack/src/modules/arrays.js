export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
export const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
export const marks = [4, 5, 5, 3, 4, 5];

export function getPairs(students) {
	const countPair = Math.ceil(students.length / 2);
	const res = [];
	const girlsArray = [];
	const boysArray = [];
	for (let i = 0; i < students.length; i++) {
		if (students[i].split('').pop() === 'а') {
			girlsArray.push(students[i]);
		} else {
			boysArray.push(students[i]);
		}
	}
	for (let i = 0; i < countPair; i++) {
		if (girlsArray[i] && boysArray[i]) {
			res.push([boysArray[i], girlsArray[i]]);
		}
	}
	return res;
}
export const pairs = getPairs(students);

export function projectForPairs(pairs, project) {
	const res = [];
	for (let pair of pairs) {
		res.push([`${pair[0]} i ${pair[1]}`, project.pop()]);
	}
	return res;

}



export function marksForStudents(students, marks) {
	const res = [];
	for (let student of students) {
		res.push([`${student}`, marks.pop()]);
	}
	return res;
}



export function getRandomNumber(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}

export function marksForPairs(paires) {
	const pairClone = [...paires];
	for (let pair of pairClone) {
		pair.push(getRandomNumber(1, 5));
	}
	return pairClone;
}
