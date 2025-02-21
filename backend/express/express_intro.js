import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hi this is express server running');
});
app.get('/about', (req, res) => {
  try {
    const data = req.query;
    //   console.log(data);
    res.send(`hello there , ${data.name} & ${data.roll}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
});
app.get('/api/:product', (req, res) => {
  try {
    const { product } = req.params;
    res.send(`Product id is ${product}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
