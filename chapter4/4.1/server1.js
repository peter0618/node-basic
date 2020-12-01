const http = require('http');
const port = 4000

const server = http.createServer((req,res) => {
  console.log('요청이 들어왔습니다!');
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
// .listen(port, () => {
//   console.log(`${port}번 포트에서 서버가 대기 중입니다!`);
// })
;

server.listen(port);

server.on('listening', () =>{
  console.log(`${port}번 포트에서 서버가 대기 중입니다!`);
});

server.on('error', (error) =>{
  console.error(error);
});
