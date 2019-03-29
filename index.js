const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const db require();
const server = express();
const port = 4000;
const dishesRouter = require('./dishes/dishes-router.js');

server.use(helmet());
server.use(express.json());
server.use('/api/dishes', dishesRouter);

server.listen(port, () => {
  console.log(`Check out the hot dishes on Port ${port}`);
});