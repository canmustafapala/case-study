require('dotenv').config();
const server = require('./server');

const port = process.env.APP_PORT || 5000;
const host = process.env.APP_HOST || "localhost";
server.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`);
});
