// 운영체제와 관련된 여러 가지 기능을 제공한다.
import os from 'node:os';

console.log(os.platform());
console.log(os.arch());
console.log(os.type());
console.log(os.release(), '\n');

const cpus = os.cpus();
console.log(cpus.length);
console.log(cpus[0].model);
console.log(cpus[0].speed, '\n');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);
console.log(totalMemory - freeMemory);

console.log(os.userInfo().username);
console.log(os.homedir());
console.log(os.tmpdir(), '\n');

console.log(os.uptime());
console.log(os.hostname());

console.log(os.networkInterfaces());