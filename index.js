'use strict';

const { start } = require('./src/server.js');
const { db } = require('./src/auth/models');

async function syncAndStart() {
  await db.sync();
  start(process.env.PORT || 3001);
}

syncAndStart();
