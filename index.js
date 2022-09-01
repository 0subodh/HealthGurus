const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from HealthGurus');
});

app.listen(port, () => {
  console.log(`HealthGurus server is  listening on port ${port}`);
});
