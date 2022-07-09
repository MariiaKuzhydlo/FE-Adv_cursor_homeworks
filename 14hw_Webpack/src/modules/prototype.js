export class Student {
	constructor(university, course, fullName, marks = [5, 4, 4, 5], isActive = true) {
		this.university = university,
			this.course = course,
			this.fullName = fullName,
			this.marks = marks,
			this.isActive = isActive
	}
	get getInfo() {
		return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`
	}
	get getMarks() {
		return this.marks;
	}
	set setMarks(value) {
		if (this.isActive) {
			this.marks.push(value);
		}
		return this.marks;
	}
	get getAverageMark() {
		if (!this.isActive) {
			return this.marks;
		}
		else {
			return (this.marks.reduce((sum, el) => sum += el, 0) / this.marks.length);
		}
	}
	dismiss() {
		this.isActive = false;
		this.marksForRecover = [...this.marks]
		this.marks = null;
	}
	recover() {
		this.isActive = true;
		this.marks = this.marksForRecover;
	}
}

export const mariia = new Student('LNU', 6, 'Mariia Kuzhydlo');


export class BudgetStudent extends Student {
	constructor(university, course, fullName, isBudget, marks = [5, 4, 4, 5], isActive = true) {
		super(university, course, fullName, marks = [5, 4, 4, 5], isActive = true)
		this.isBugget = isBudget,
			setInterval(this.getScholarship, 30000);
	}
	getScholarship = () => {
		if (this.isActive && (this.getAverageMark >= 4)) {
			console.log('Ви отримали 1400 грн. стипендії!');
		} else if (!this.isActive || this.getAverageMark < 4) {
			console.log("Ви не отримали стипендію")
		}
	}
}

