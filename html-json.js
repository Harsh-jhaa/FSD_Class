import http from 'http';
import fs from 'fs/promises';

const app = http.createServer(async (req, res) => {
  //   res.sendDate();
  // res.end('server created successfully');
  // res.setMaxListenersend(JSON.stringify(user));
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const userData = await fs.readFile('./user.json', 'utf-8');
    const data = JSON.parse(userData);
    res.end(JSON.stringify(data));
  } else if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const home = await fs.readFile('./home.html', 'utf-8');
    res.end(home);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const err = await fs.readFile('./error.html', 'utf-8');
    res.end(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
