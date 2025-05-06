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