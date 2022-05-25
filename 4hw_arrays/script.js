const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs(students) {
    const countPair = Math.ceil(students.length / 2);
    const res = [];
    const girlsArray = [];
    const boysArray = [];
        for(let i = 0; i < students.length; i++) {
            if(students[i].split('').pop() === 'а'){
            girlsArray.push(students[i]);
            } else {
            boysArray.push(students[i]);
            }
        }
        for(let i = 0; i < countPair; i++) {
            if(girlsArray[i] && boysArray[i]){
                res.push([boysArray[i], girlsArray[i]]);
            }
        }
    return res;
}

const pairs = getPairs(students);
console.log(pairs);
const func1 = document.getElementById('func1');
func1.innerHTML = ' 1. ' +  JSON.stringify(pairs);


//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function projectForPairs(pairs, project) {
    const res = [];
    for(let pair of pairs){
        res.push([`${pair[0]} i ${pair[1]}`, project.pop()]);
    }
    return res;

}

const pairsWithProject = projectForPairs(pairs, themes);
console.log(pairsWithProject);
const func2 = document.getElementById('func2');
func2.innerHTML = '2. ' +  JSON.stringify(pairsWithProject);


//3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function marksForStudents(students, marks){
    const res = [];
    for(let student of students){
        res.push([`${student}`, marks.pop()]);
    }
    return res;
}

const studentsWithMarks = marksForStudents(students, marks);
console.log(studentsWithMarks);
const func3 = document.getElementById('func3');
func3.innerHTML = '3. ' +  JSON.stringify(studentsWithMarks);


//4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function getRandomNumber(min , max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function marksForPairs(paires){
    const pairClone = [...paires];
    for(let pair of pairClone){
        pair.push(getRandomNumber(1,5));
    }
    return pairClone;
}

const pairsWithMarks = marksForPairs(pairsWithProject);
console.log(pairsWithMarks);
const func4 = document.getElementById('func4');
func4.innerHTML ='4. '+  JSON.stringify(pairsWithMarks);