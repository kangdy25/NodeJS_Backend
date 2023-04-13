// node Basic_Grammer/BasicGrammer09.js

// 정규표현식(RegExp) \ 이스케이프
// => 정규표현식은 /로 시작해서 /g로 끝나는 것이 기본이다.
const string1 = '<h1>:::특별가 - 99,000원:::</h1>'
const result1 = string1.replace(/<h1>/g, '');
console.log('result1:', result1);

const result2 = string1.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('result2:', result2);

// 정규표현식(RegExp) . 점 
// => . (점) 연산자는 한 개의 글자를 의미한다. .의 개수만큼 글자가 할당된다.
const string2 = '<h1>특별가 - </h1><h2>99,000원</h2>'
const result3 = string2.replace(/<..>/g, '');
const result4 = string2.replace(/<.../g, '');

console.log('<..> :', result3);
console.log('<... :', result4);

// 정규표현식(RegExp) {0, 1} 중괄호
// => 어떤 글자가 0~1개일 수 있다는 것을 의미한다.
// => .{0,4} 같은 경우는 어떤 글자가 0~4개일 수 있다는 것을 의미한다.
const string3 = `<h1>특별가 - </h1><h2>99,000원</h2>`;
const stringDiv = `<div>특별가 - <div><h2>99,000원</h2>`;
const replaceH1 = string3.replace(/<.{0,1}h1>/g, '');
const replaceTags = stringDiv.replace(/<.{0,4}>/g, '');

console.log(replaceH1);
console.log(replaceTags);

// 정규표현식(RegExp) []
// => 여러 가지 기호들이나 문자를 모두 매칭하고 싶다면 [] 대괄호 안에 넣으면 된다.
const string4 = `(<h1>:::특별가 - 99,000원:::</h1>)`;

const replacedBracket = string4.replace(/[()]/g, '');
const replacedBracketOrSlashHyphenComma = string4.replace(/[()/\-,]/g, '');

console.log('바꾸기 전 ---->', string4);
console.log('() 없애기 ---->', replacedBracket);
console.log('/- 없애기 ---->', replacedBracketOrSlashHyphenComma);

// 정규표현식(RegExp) .match()
// => .match()를 이용하면 원하는 패턴으로 문자열에서 필요한 부분을 추출할 수 있다.
const text = 'hello my name is DongYoon';
const matched = text.match(/[a-l]{1,3}/g);

console.log(matched);

// 시간 함수

// 정기적으로 실행하기 setInterval(fn, milsec)
setInterval(() => {console.log('hello')}, 1000);
const printBye = () => {console.log('bye')};
setInterval(printBye, 2000);

// 몇 초 후에 실행하기 setTimeout(fn, milsec)
setTimeout(() => {console.log('hello')}, 3000);

// 정기적으로 실행 취소하기 clearInterval(fn)
const playInterval = setInterval(() => {console.log('첼강딱')}, 1000);
setTimeout(() => {clearInterval(playInterval);}, 5000);