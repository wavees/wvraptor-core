/*!
 * wvraptor-core
 * @description Database instance. This file creates database
 * instance and makes it public to every module that using
 * it.
 * @warning This instance will be deleted shortly.
 */

const lowdb    = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter  = new FileSync('database.json');
const db       = lowdb(adapter);

// Writing default values for database.
db.defaults({
  values: []
}).write();

module.exports = db;