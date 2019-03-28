const express = require('express');
const helmet = require('helmet');

// const db require();
const server = express();

server.use(helmet());
server.use(express.json());

const port = 5000;
server.listen(port, () => {
  console.log(`Check out the goods on Port ${port}`);
});