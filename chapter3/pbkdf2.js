const crypto = require('crypto');

// crypto.randomBytes와 crypto.pbkdf2 메서드는 내부적으로 스레드풀을 사용해 멀티 스레딩으로 동작 => 따라서 싱글 스레드 프로그래밍을 할 때 블로킹 되지 않음.
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  // 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});

// pbkdf2 를 사용할 때는 salt를 잘 보관하고 있어야 함.
// pbkdf2 보다 bcrypt, scrypt 가 보안에 더 강함.
