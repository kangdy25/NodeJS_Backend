// URL 문자열을 파싱하고 조작하는 기능을 제공함

// import { URL } from 'url';

// const myUrl = new URL(
//   'https://example.com:8080/path?name=John&age=30#section1'
// );

// console.log(myUrl.protocol); // https:
// console.log(myUrl.hostname); // example.com
// console.log(myUrl.origin); // https://example.com
// console.log(myUrl.port); // 8080
// console.log(myUrl.pathname); // /path
// console.log(myUrl.searchParams.get('name')); // John
// console.log(myUrl.hash); // #section1

// const myUrl = new URL('https://example.com?name=John&age=25');

// myUrl.searchParams.append('age', '30');

// myUrl.searchParams.set('name', 'Doe');

// myUrl.searchParams.delete('age');

// myUrl.searchParams.set('job', 'developer');

// console.log(myUrl.toString()); // https://example.com/?name=Doe&job=developer

// console.log(myUrl.searchParams.get('job')); // developer
// console.log(myUrl.searchParams.getAll('job')); // ['developer', 'designer']
// console.log(myUrl.searchParams.has('name')); // true
// console.log(myUrl.searchParams.has('age')); // false

// 상대적 경로
import { URL } from 'url';

const baseUrl = 'https://example.com/products/';

const productUrl = new URL('laptop', baseUrl);
console.log(productUrl.href); 
// 'https://example.com/products/laptop'

const categoryUrl = new URL('../categories/electronics', baseUrl);
console.log(categoryUrl.href);
// 'https://example.com/categories/electronics'

const homeUrl = new URL('../../', baseUrl);
console.log(homeUrl.href);
'https://example.com/'

const searchUrl = new URL('search?q=phones', baseUrl);
console.log(searchUrl.href);
// 'https://example.com/products/search?q=phones'

// 파일 URL => 파일 경로, 파일 경로 => 파일 URL
import { fileURLToPath, pathToFileURL } from 'url';

const filePath = fileURLToPath('file:///C:/Users/John/project/index.js');
console.log(filePath);
// 'C:\Users\John\project\index.js'

const fileUrl = pathToFileURL('/home/user/project/index.js');
console.log(fileUrl.toString());
// 'file:///home/user/project/index.js'