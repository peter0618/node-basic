const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));


const query2 = {
  page:4,
  limit:11,
  category:'java'
};
console.log('querystring.stringify() query2:', querystring.stringify(query2));


const query3 = {
  page:4,
  limit:11,
  category:['java','mysql']
};
console.log('querystring.stringify() query3:', querystring.stringify(query3));
