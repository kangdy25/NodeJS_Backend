// filter() 사용법
const ages = [11, 12, 13, 16, 21, 31];

const upper16 = ages.filter(age => age > 16);
const upper13 = ages.filter(age => age > 13)
const between12And21 = ages.filter(age => age > 12 && age < 21);

console.log('upper16:', upper16);
console.log('upper13:', upper13);
console.log('between12And21:', between12And21);

// filter() 예제
const students = [
    {name: '보영', age: 10, math: 100, english: 90},
    {name: '승민', age: 10, math: 100, english: 90},
    {name: '루아', age: 11, math: 90, english: 80},
    {name: '유나', age: 13, math: 100, english: 100},
];

const mathUpper80 = students.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = students.filter(student => student.math > 90 && student.english > 70);

console.log('mathUpper80:', mathUpper80);
console.log('mathUpper80AndEnglishUpper70:', mathUpper80AndEnglishUpper70);

// map() 사용법
const list = [1, 2, 3];

const multipledList = list.map(item => item * 10);
multipledList.forEach(item => console.log(item));

// map() 함수 예제
const listEmployee = [
    {name: '동윤', age: 23, salary: 6000},
    {name: '정인', age: 23, salary: 4000},
    {name: '영만', age: 23, salary: 5000},
    {name: '다윗', age: 23, salary: 7000},
]
const raisedSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
raisedSalaryList.forEach(salary => console.log('salary : %d', salary));

// reduce() 사용법
const scores = [10, 20, 30, 40, 50];
const sum = scores.reduce((a, b) => (a + b));
const sumWithInitValue = scores.reduce((a, b) => (a + b), 10);

console.log('sum :', sum);
console.log('sumWithInitValue :', sumWithInitValue);

// reduce() 함수 예제
const student = [
    {name: '보영', age: 10, score: 100},
    {name: '승민', age: 10, score: 90},
    {name: '루아', age: 11, score: 100},
    {name: '유나', age: 13, score: 100},
]
const score = student.map(student => student.score);
const totalSum = score.reduce((a, b) => a + b, 0);
console.log('sum:', totalSum);

// .filter(), .map(), .reduce 통합 함수 예제 01

// 위의 student 변수 그대로 이용
const upper80StudentSum = student.filter(student => student.score > 90)
                                .map(student => student.score)
                                .reduce((a, b) => (a + b));
console.log('sum:', upper80StudentSum);

// .filter(), .map(), .reduce 통합 함수 예제 02
const employeeList = [
    {name: '동윤', age: 23, department: 'developer'},
    {name: '정인', age: 23, department: 'musician'},
    {name: '영만', age: 23, department: 'pestor'},
    {name: '다윗', age: 23, department: 'missionary'},
]
const developerAgeList = employeeList.filter(employee => employee.department === 'developer')
                                    .map(employee => employee.age);
console.log(developerAgeList.reduce((a, b) => a + b));

// .filter(), .map(), .reduce 통합 함수 예제 02

// 위의 student 변수 그대로 이용
const between10to13StudentAverage = student.filter(student => student.age >= 10 && student.age < 13)
                                            .map(student => student.score)
                                            .reduce((previous, current, index, array) => 
                                                previous + (current / array.length), 0)
console.log('average:', between10to13StudentAverage)