/*!
 * wvraptor-core
 * @description Setting up all database actions and
 * database connection in common.
 */

module.exports = {
  // Exporting actions/Create
  create: require('./actions/create'),

  // .../Read,
  read: require('./actions/read'),

  // .../Update
  update: require('./actions/update'),

  // .../Delete
  delete: require('./actions/delete'),
}