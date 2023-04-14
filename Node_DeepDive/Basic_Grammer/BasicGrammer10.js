// 리스트 (list)
const studentList = [
    {name: 'dongyoon', age: 23, score: 100},
    {name: 'jungin', age: 23, score: 80},
    {name: 'youngman', age: 23, score: 80},
]
console.log(studentList[0]);

const student1 = {name: 'yuna', age: 13, score: 90};

studentList.push(student1);
console.log(studentList);

// 배열 뒤집기 .reverse()
const numbers = [1, 2, 3, 4];
numbers.reverse();

console.log('numbers:', numbers);

const stringArray = 'hello'.split('');
stringArray.reverse();
console.log('stringArray:', stringArray);

// 정렬하기 오름차순 .sort()
const number = [3, 6, 2, 8, 5];
const bible = [
    'Revelation',
    'John',
    'Acts',
    'Genesis',
    'Exodus',
]

const sortedNumber = number.sort();
const sortedBible = bible.sort();

console.log('sorted number:', sortedNumber);
console.log('sorted number Desc:', sortedNumber.reverse());
console.log('sorted bible:', sortedBible);
console.log('sorted bible Desc:', sortedBible.reverse());

// 정렬하기 여러 조건 .sort()
const studentList2 = [
    {name: 'dongyoon', age: 23, math: 100, english: 100},
    {name: 'jungin', age: 23, math: 80, english: 90},
    {name: 'youngman', age: 23, math: 80, english: 95},
    {name: 'jihun', age: 20, math: 40, english: 75},
    {name: 'hajin', age: 21, math: 95, english: 55},
]

studentList2.sort((beforeStudent, nextStudent) => {
    if (beforeStudent.age > nextStudent.age) return 1;
    else if (beforeStudent.age < nextStudent.age) return -1;
    else if (beforeStudent.math > nextStudent.math) return -1;
    else if (beforeStudent.math < nextStudent.math) return 1;
    return 0;
});

console.log(studentList2);

// JSON 오브젝트 정렬
const studentList3 = [
    {name: 'dongyoon', age: 23, math: 100, english: 100},
    {name: 'hajin', age: 21, math: 95, english: 55},
    {name: 'jungin', age: 23, math: 80, english: 90},
    {name: 'youngman', age: 23, math: 80, english: 95},
    {name: 'jihun', age: 20, math: 40, english: 75},
];

studentList3.sort((now, next) => {now.math - next.math});
console.log('studentList:', studentList3);

const compare = (now, next) => {
    console.log('----------------');
    console.log('now:', now);
    console.log('next:', next);
}
studentList3.sort(compare);

// 배열에서 필요한 부분만 뽑기 .slice()
const bible2 = [
    'Revelation',
    'John',
    'Acts',
    'Genesis',
    'Exodus',
];

const sliced = bible2.slice(1, 3);
console.log('sliced:', sliced);

// 배열 합치기 .concat()
const part1 = ['dongyoon', 'hajin'];
const part2 = ['jungin', 'youngman'];
const part3 = ['sunwoo', 'jihun'];

const team = part1.concat(part2);
const team2 = part2.concat(part2, part3);

console.log(team);
console.log(team2);

// 배열 shift(), unshift(), .pop(), .push()
const destination = ['리버풀', '첼시', '맨체스터', '아스날'];
console.log(destination);

// shift 
// => 첫 번째 값 제거
console.log(destination.shift());
console.log(destination);

// unshift 
// => 첫 번째 값 추가
destination.unshift('토트넘');
console.log(destination);

// .pop()
// => 마지막 값 뽑은 후 제거
console.log(destination.pop());
console.log(destination);

// .push()
// => 마지막 값 추가
destination.push('뉴캐슬');
console.log(destination);