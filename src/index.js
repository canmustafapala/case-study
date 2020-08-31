require('dotenv').config();
const server = require('./server');

const port = process.env.APP_PORT || 5000;

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
