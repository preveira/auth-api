'use strict';

const { server } = require('../src/server.js');
const { db, users } = require('..//src/auth/models');
const supertest = require('supertest');
const jwt = require('jsonwebtoken');

const request = supertest(server);

let testUser;

beforeAll( async() => {
  await db.sync();
  testUser = await users.create({
    username: 'test',
    password: 'testpassword',
    role: 'admin',
  });
});

afterAll( async() => {
  await db.drop();
});

describe('Auth routes', () => {
  it('Should create a new user', async() => {
    let response = await request.post('/auth/signup').send({ username: 'username', password: 'password', role: 'admin'});
    expect(response.status).toEqual(201);
    expect(response.body.token).toBeTruthy();
    expect(response.body.user.username).toEqual('username');
  });
  it('Should signin with basic auth', async () => {
    let response = await request.post('/auth/signin').auth('username', 'password');
    expect(response.status).toEqual(200);
    expect(response.body.user.username).toEqual('username');
    expect(response.body.token).toBeTruthy();
  });
  it('Should ')
});

