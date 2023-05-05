// Promise 
// 비동기 처리를 할 때, 콜백 중첩을 좀 더 보기 쉽게 작성 가능하며 에러처리와 디버깅에 유용하다.
const promiseFirst = new Promise(resolve => resolve(1))
    .then(result => `${result + 10}`);

const promiseSecond = new Promise(resolve => resolve(2))
    .then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]).then((result) => {
    console.log('result:', result);
    console.log('sum:', Number(result[0]) + Number(result[1]));
});

// exports
// 모듈을 분리하고 다른 곳에서 불러와 쓰게 할 때, 사용한다.
// export와 다르다는 것을 유의하자
const printHello = () => console.log('hello');

exports.printHello = printHello;
exports.printMessage = (message) => {
    console.log(message);
};