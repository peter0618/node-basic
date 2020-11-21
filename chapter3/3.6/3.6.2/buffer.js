const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);

const buffer4 = Buffer.from(' ');
console.log(buffer4); // 띄어쓰기는 1byte, <Buffer 20>

const buffer5 = Buffer.from('나');
console.log(buffer5); // 한글 1글자는 3byte

const buffer6 = Buffer.from('a');
console.log(buffer6); // 알파뱃 1글자는 1byte
