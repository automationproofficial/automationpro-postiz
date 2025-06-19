const express = require('express');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Postiz server running!');
});

app.listen(port, () => {
  console.log(`Postiz app listening at http://localhost:${port}`);
});