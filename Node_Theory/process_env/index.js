// Process
console.log('Process ID:', process.pid);
console.log('Parent Process ID:', process.ppid);

console.log('Node.js Version:', process.version);
console.log('V8 Version:', process.versions.v8);

console.log('Processor Architecture:', process.arch);
console.log('Operating System:', process.platform);

console.log('Executable Path:', process.execPath);
console.log('Current Working Derictory:', process.cwd());

console.log('CPU Usage:', process.cpuUsage());
console.log('Memory Usage:', process.memoryUsage());

// Environment Variables

import dotenv from "dotenv"
dotenv.config({ override: true })

console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
console.log(process.env.DB_HOST);