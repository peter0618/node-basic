const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt'); // 이 시점에 big.txt 파일의 내용을 모두 읽어들여서 메모리에 저장하므로, 메모리 사용량이 급격하게 증가합니다.
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);
