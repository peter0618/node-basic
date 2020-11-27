// 이와 같이 예기치 못한 에러에 대한 처리를 미리 해두면.. try ~ catch 문으로 감싸지 않은 곳에서 에러가 나도, 여기 콜백을 타게 되어서 프로세스가 죽는 상황을 막게 됨.
process.on('uncaughtException', (err) => {
  console.error('예기치 못한 에러', err);

  // process.exit(1); uncaughtException 에러 발생 후 정상적으로 동작한다는 보장이 없기 때문에, uncaughtException 처리는 로깅 용도로만 사용하고 프로세스를 종료할 것을 권고함.
});

setInterval(() => {
  throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
  console.log('실행됩니다');
}, 2000);
