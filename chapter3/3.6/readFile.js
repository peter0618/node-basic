const fs = require('fs');

// 파일 경로는 "node" 명령어를 실행하는 콘솔 기준
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // readFile의 결과 data의 기본 형태는 Buffer
  console.log(data.toString());
});
