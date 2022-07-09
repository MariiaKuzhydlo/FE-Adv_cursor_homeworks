export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

export const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

export const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


export function getMyTaxes(salary) {
	return this.tax * salary;
}


export function getMiddleTaxes() {
	return this.tax * this.middleSalary;
}


export function getTotalTaxes() {
	return this.tax * this.middleSalary * this.vacancies;
}

export function getMySalary() {
	setInterval(() => {
		const salary = 1500 + Math.random() * (2000 - 1500);
		const taxes = this.tax * salary;
		const profit = salary - taxes;
		const res = {
			salary: salary,
			taxes: taxes,
			profit: profit,
		};
		console.log(res);
	}
		, 10000)
}

