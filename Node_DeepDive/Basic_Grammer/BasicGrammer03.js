// node Basic_Grammer/BasicGrammer03.js

// Date() 
const today = new Date();
const date1 = new Date(2023, 4 - 1, 5);
const date2 = new Date(2023, 3, 5);
const date3 = new Date(2023, 3, 5, 34);
const date4 = new Date(2023, 3, 5, 34, 21);
const date5 = new Date(2023, 3, 5, 34, 21, 5);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());

// 날짜 시간 출력
const date = new Date(2023, 3, 5, 9, 53, 20);
console.log('date : %s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());
console.log('LocaleTimeString : %s', date.toLocaleTimeString());

console.log('year : %s', date.getFullYear());
console.log('month : %s', date.getMonth() + 1);
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());

// yyyy-mm-dd 형식으로 출력
const getYYYYMMDD = date => {
    const yyyy =  date.getFullYear();
    const mm = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : (date.getDate());

    return `${yyyy}-${mm}-${dd}`;
}

const printYYYYMMDD = getYYYYMMDD(new Date(2023, 3, 5));
console.log(printYYYYMMDD);
console.log(getYYYYMMDD(new Date()));

// 타임스탬프: 날짜와 시간을 숫자로만 나타낸 값 (13자리 수), 1970년 1월 1일 0시 0분 0초를 기준으로 한다.
const day = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(23891642749224);
const timestampToInit = new Date(1);

console.log(`Date to timestamp: ${dateToTimestamp}`);
console.log(`Initial timestamp: ${timestampToInit}`);
console.log(`Timestamp to date: ${timestampToDate}`);