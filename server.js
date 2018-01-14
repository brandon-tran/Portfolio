const express = require('express');
const path = require('path');

const indexPath = path.join(__dirname);

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(indexPath));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
