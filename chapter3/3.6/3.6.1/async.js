const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');

// readFile 함수는 비동기로 처리되기 때문에 백그라운드에 해당 파일을 읽으라고 요청만 하고 다음 작업으로 넘어감.
// 나중에 읽기가 완료되면 백그라운드가 다시 메인스레드에 알려주고, 그 때 콜백함수가 실행됨.

// 동기와 비동기 : 백그라운드 작업 완료 확인 여부
// 블로킹과 논 블로킹 : 함수가 바로 return 되는지 여부
