const Keyv = require('keyv');
const db = new Keyv('sqlite://shiunku.db');

module.exports = { db }