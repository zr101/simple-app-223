const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, AWS EC2 and Jenkins Pipeline!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
