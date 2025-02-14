import http from 'http';
const user = {
  name: 'Suresh',
  id: 3,
  email: 'suresh@123',
};

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   res.sendDate();
  res.end('server created successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
