// Event Emitter 기본 사용법
// import { EventEmitter } from 'events';

// const emitter = new EventEmitter();

// // 첫 번째 인자로 주어진 문자열을 이름으로 갖는 이벤트를 등록한다.
// emitter.on('start', () => console.log('Started'));
// // 이벤트의 이름과 해당 이벤트 발생 시 호출할 리스너 함수를 인자로 받고, "한 번만" 실행한다.
// emitter.once('end', () => console.log('Ended'));

// console.log(emitter.eventNames());

// // 이벤트 실행
// emitter.emit('start');
// emitter.emit('end');

// console.log(emitter.eventNames());

// emitter.emit('start');
// emitter.emit('end');

// // 특정 이벤트에 대한 리스너 사용
// import { EventEmitter } from 'events';

// const emitter = new EventEmitter();

// const listener1 = () => console.log('Listener 1');
// const listener2 = () => console.log('Listener 2');
// const listener3 = () => console.log('Listener 3');

// emitter.on('my-event', listener1);
// emitter.on('my-event', listener2);
// emitter.on('my-event', listener3);

// console.log(emitter.listeners('my-event'));
// console.log('Count:', emitter.listenerCount('my-event'));

// emitter.emit('my-event');

// // 이벤트 제거 함수
// emitter.off('my-event', listener2);

// console.log(emitter.listeners('my-event'));
// console.log('Count:', emitter.listenerCount('my-event'));

// emitter.emit('my-event');

// 이벤트 리스너 최대 개수 제한 (강제 X, 경고 O)
// import { EventEmitter } from 'events';

// const emitter = new EventEmitter();

// emitter.setMaxListeners(2);

// emitter.on('my-event', () => console.log('Listener 1'));
// emitter.on('my-event', () => console.log('Listener 2'));
// emitter.on('my-event', () => console.log('Listener 3'));

// emitter.emit('my-event');

// 이벤트의 매개변수화
// import { EventEmitter } from 'events';

// const emitter = new EventEmitter();

// emitter.on('data', (name, age) => console.log(`Name: ${name}, Age: ${age}`));

// emitter.emit('data', 'Alice', 25);
// emitter.emit('data', 'Bob', 30);

// 이벤트 오류 처리
// import { EventEmitter } from 'events';

// const emitter = new EventEmitter();

// emitter.emit('nothing');

// emitter.emit('error');

// emitter.on('error', (err) => { 
//   console.log(`Error occurred: ${err.message}`);
// });

// emitter.emit('error', new Error('Something went wrong'));

// Event Emitter 확장 클래스
// import { EventEmitter } from 'events';

// class MyEmitter extends EventEmitter {
//   constructor(name, maxRetries) {
//     super();
//     this.name = name;
//     this.maxRetries = maxRetries;
//     this.count = 0
//   }

//   start() { this.emit('start', this.name); }

//   retry() { this.emit(++this.count < this.maxRetries ? 'retry' : 'failed', this.count); }
// }

// const myEmitter = new MyEmitter('Task1', 3);

// myEmitter.on('start', (name) => console.log(`${name} started`));
// myEmitter.on('retry', (count) => console.log(`Retry ${count}`));
// myEmitter.on('failed', (count) => console.log(`Failed at ${count}`));

// myEmitter.start();
// myEmitter.retry();
// myEmitter.retry();
// myEmitter.retry();

// 실무에서 Event Emitter 사용
import { FileUploader } from 'virtual-file-uploader';

const uploader = new FileUploader('document.pdf');

uploader.on('start', (name) => {
  console.log(`Uploading ${name}`);
});

uploader.on('progress', (percent) => {
  console.log(`Progress: ${percent}%`);
});

uploader.on('done', (name) => {
  console.log(`${name} uploaded successfully`);
});

uploader.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

uploader.upload();