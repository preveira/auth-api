'use strict';

require('dotenv').config();
const { db } = require('./src/models/index.js');
const server = require('./src/server.js');

const PORT = process.env.PORT || 3001;


async function syncAndStart() {
  await db.sync();
  server.start(PORT);
}

syncAndStart();
