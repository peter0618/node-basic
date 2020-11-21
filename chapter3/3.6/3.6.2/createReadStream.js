const fs = require('fs');

// buffer 사이즈를 16 바이트로 셋팅해서 16byte 씩 잘라서 가져옵니다.
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

// 16byte 단위로 잘라서 가져올 때마다 호출됩니다.
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});
