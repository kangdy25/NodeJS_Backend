// try - catch
try {
    printMessage('hello');
} catch (e) {
    console.log('error:', e);
} finally {
    console.log('finally... program finished');
}

// 예외가 날 것 같은 곳에 try catch를 걸어 프로그램이 멈추는 것을 예방한다.
// try-catch의 결과에 상관없이 finally 블록은 항상 실행된다. 


/* 전역 객체 {
    process: 현재 동작 중인 프로세스 정보
    console: 콘솔 출력
    buffer: 이진 데이터를 다루는 버퍼 클래스
    require(): 모듈 로딩
    __filename, __dirname: 현재 폴더 경로와 파일 경로
    module, exports: 로딩된 모듈 정보와 모듈로 타입, 객체 노출시키기
    Timeout: 타이머, 반복 함수
} */ 

// process
console.log(process.env); // 컴퓨터 환경과 관련된 정보를 가진 객체
console.log('------------------------'); 
console.log(process.arch); // 프로세서의 아키텍처
console.log('------------------------');
console.log(process.uptime()); // 현재 프로그램이 실행된 시간
console.log('------------------------');
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log('------------------------');
console.log(process.version); // Node.js 버전 
console.log('------------------------');
console.log(process.versions); // Node.js 버전 
