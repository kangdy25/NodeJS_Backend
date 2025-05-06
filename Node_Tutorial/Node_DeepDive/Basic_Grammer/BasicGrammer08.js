// 특정 문자열 바꾸기 .replace()
const greeting = 'hello';
const dateString1 = '2023-04-13T10:17:00';
const smallBracket = '()';

const replaceGreeting = greeting.replace('el', '');
const replaceDateString = dateString1.replace('T', ' ');
const middleBracket = smallBracket.replace('(', '{').replace(')', '}');

console.log('el 없애기 : %s', replaceGreeting);
console.log('T 없애기 : %s', replaceDateString);
console.log('() => {} : %s', middleBracket);

// 문자열 나누기 .split() 
const dateString2 = '2023-04-13 10:30:00';

const date = dateString2.split(' ')[0];
const time = dateString2.split(' ')[1];

console.log('date : %s', date);
console.log('time : %s', time);

const result = 'abc'.split('b');
console.log('result:', result);

// 문자열 추출하기 .substring()

const string = 'adfalnkdsjfbalewfnfa';

const string1 = string.substring(0, 4);
const string2 = string.substring(8, 11);
const string3 = string.substring(18, 20);

console.log('0, 4:', string1);
console.log('8, 11:', string2);
console.log('18, 20:', string3);

// 숫자로 바꾸기 Number()
const order1 = {no : 1, productName: '티셔츠', price: '30000'};
const order2 = {no : 2, productName: '청바지', price: '45000'};
const order3 = {no : 3, productName: '신발', price: '55.70'};
const order4 = {no : 4, productName: '선글라스', price: '120.80'};

const concatenate = order1.price + order2.price;
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10);
const sumParseInt = parseInt(order3.price, 10) + parseInt(order4.price, 10);
const sumNumber = Number(order3.price) + Number(order4.price);

console.log("order1['price'] + order2['price'] : %s", concatenate);
console.log("parseInt(order1['price']) + parseInt(order2['price']) : %s", sum1);
console.log("parseInt(order3['price']) + parseInt(order4['price']) : %s", sumParseInt);
console.log("Number(order3['price']) + Number(order4['price']) : %s", sumNumber);