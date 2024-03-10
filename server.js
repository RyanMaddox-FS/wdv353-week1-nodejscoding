const http = require('http');
require("dotenv").config();
const app = require("./app");

const server = http.createServer(app);


server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});