const Server = require('./models/Server');

require('dotenv').config();

server = new Server();

server.listen();


