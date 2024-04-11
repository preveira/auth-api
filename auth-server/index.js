'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const { db } = require('./src/auth/models');

async function syncAndStart() {
  await db.sync();
  app.start(process.env.PORT || 3001);
}

syncAndStart();