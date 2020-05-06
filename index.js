const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////////////
// File
/////////////////////////////////////
//  //Blocking,synchronous way
// const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(txtIn);

// const txtOut = `This is what we know about avacado: ${txtIn}.\n created on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', txtOut);

// //Non-Blocking,asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);
//       fs.writeFile('./txt/final.txt', `${data2}\n ${data3}`, (err) => {
//         console.log('Your Fill Has Been Written!!!!');
//       });
//     });
//   });
// });+

// console.log('File WILL FINISH SOOOOOOOOOON !!!');

///////////////////////////////////////
// Server
/////////////////////////////////////

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('Overview Page');
  } else if (pathName === '/product') {
    res.end('Product page');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Page Not Found!!!!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});