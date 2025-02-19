import http from 'http';
import axios from 'axios';
const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const response = await axios.get('https://dummyjson.com/products');
  const data = response.data.products;
  let frontData = `<html><head></head><body>`;
  data.forEach((product) => {
    frontData += `<div><img src="${product.thumbnail}"></div>`;
  });
  frontData += `</body></html>`;
  res.end(frontData);
  //   res.end(JSON.stringify(data));
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
