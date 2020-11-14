const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

// util.promisify : 콜백 패턴을 프로미스 패턴으로 바꾸는 util
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });

(async () => {
  const buf = await randomBytesPromise(64);
  console.log(`buf : ${buf.toString('base64')}`);
})();
