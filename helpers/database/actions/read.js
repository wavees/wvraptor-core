/*!
 * wvraptor-core
 * @description This is an action for database module.
 * It describes how data will be READ from database.
 * @warning This action will be replaced soon. We'll use
 * another API for database storage.
 */

const database = require('../instance.js');

module.exports = (query) => {
  let data = database.get('values')
    .filter(query)
    .value();
  return data;
};