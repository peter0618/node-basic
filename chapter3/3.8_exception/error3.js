const fs = require('fs').promises;

// catch를 안붙여도 알아서 에러처리를 해주지만, catch를 붙이는 것 권장!
setInterval(() => {
  fs.unlink('./abcdefg.js').catch(e => {
    console.log('error!!');
    console.log(e);
  })
}, 1000);
