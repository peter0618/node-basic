const fs = require('fs').promises; // 이렇게 하면, fs룰 promise 기반으로 변경해서 적용할 수 있습니다.

fs.readFile('./readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
