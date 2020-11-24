const exec = require('child_process').exec;

// CLI 명령어를 실행합니다.
var process = exec('ls -al');

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러
