'use strict';

const express = require('express');
const app = new express();
const cors = require('cors');

const router = require('./router');
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} 🚀`); // eslint-disable-line no-console
});
