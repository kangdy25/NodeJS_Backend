// 파일로 출력하기 fs.write()
const fs = require('fs');

const contents = 'hello\nbye\n안녕하세요';
fs.writeFile('./Library/HandlingFile/message.txt', contents, 'utf-8', function(error) { //function(error) 추가해야 함
    console.log('write end!');
});

// 동기로 파일 열기 fs.readFileSync()
const fs = require('fs');

const data = fs.readFileSync('./Library/HandlingFile/message.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);

// 비동기로 파일 열기 fs.readfile()
const fs = require('fs');

fs.readFile('./Library/HandlingFile/message.txt', (err, data) => {
    if (err) throw err;
    console.log('sync work01');
    console.log(data.toString());
})

// 파일 내용 수정하기
const fs = require('fs');

fs.readFile('./Library/HandlingFile/message.txt', (err, data) => {
    if (err) throw err;
    let contents = data.toString();
    contents = 'replaced test file';
    fs.writeFile('./Library/HandlingFile/message.txt', contents, 'utf-8', function(error) { //function(error) 추가 
        console.log('replace end!');
    });
});

// 파일에 내용 추가하기 fs.appendFile()
const fs = require('fs');

const list = [1, 2, 3, 4, 5];
list.forEach(item => fs.appendFile('./Library/HandlingFile/Chapters.txt', `chapter ${item}\n`, function(error) {
    console.log('write end!');
}));

// 디렉토리 만들기
const fs = require('fs');
const dirName = `${__dirname}/img`;

if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}

// 파일 리스트 출력하기
const testFolder = './';
const fs = require('fs');

fs.readdir(testFolder, function(err, filelist){  // 배열 형태로 출력
    console.log(filelist);
});

fs.readdir(testFolder, (err, filelist) => { // 하나의 데이터씩 나누어 출력
    filelist.forEach(file => {
        console.log(file);
    })
});

// list를 json 형식으로 파일에 저장하기, JSON.stringify()
const fs = require('fs');

const userList = [
    {name: 'Dongyoon', age: 23},
    {name: 'Youngman', age: 23},
];
fs.writeFile('./Library/HandlingFile/list.json', JSON.stringify(userList), 'utf-8', function(error) { //function(error) 추가해야 함
    console.log('JSON!');
});

// 파일을 json 형식으로 불러오기, JSON.parse()
const fs = require('fs');

fs.readFile('./Library/HandlingFile/list.json', (err, data) => {
    if (err) throw err;
    const json  = JSON.parse(data.toString());
    console.log('name: ', json[0].name);
    console.log('name: ', json[1].name);
});

// 파일 이름 바꾸기
const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
    fs.rename(fromFilePathName, toFilePathName, (err) => {
        if (err) console.log(`ERROR: ${err}`);
    });
};

const fromFilePathName = './Library/HandlingFile/message.txt';
const toFilePathName = './Library/HandlingFile/Bye.txt';
renameFile(fromFilePathName, toFilePathName);