// node Basic_Grammer/BasicGrammer02.js  

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i}과 ${j}를 곱한 값은 ${i * j}입니다.`);
    }
}

// for of 문
const userList = [
    {name: '동윤', age: 23},
    {name: '지훈', age: 20},
    {name: '세연', age: 26}
];

for (const 유저 of userList) {
    console.log('1번:', 유저);
}

// forEach()
const listUser = [
    {name: '동윤', age: 23},
    {name: '지훈', age: 20},
    {name: '세연', age: 26}
]

listUser.forEach(user => {
    console.log(user);
})