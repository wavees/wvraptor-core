/*!
 * wvraptor-core
 * @description This is an action for database module.
 * It describes how data will be INSERTED into database.
 * @warning This action will be replaced soon. We'll use
 * another API for database storage.
 */

const database = require('../instance.js');

module.exports = (object) => {
  database.get('values')
    .push(object)
    .write();
};