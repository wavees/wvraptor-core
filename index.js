/*!
 * wvraptor-core
 * @description Core application for wvraptor. It provides
 * a lot of useful API, that is accesable only from
 * authorized sources.
 * @author wavees/SniperFox213
 */

/*!
 * @section Connecting modules
 * @description Connecting undividable modules.
 */
const express    = require('express');
const cors       = require('cors');

const bodyParser = require('body-parser');

// Database module
const database   = require('./helpers/database/index.js');

/*!
 * @section Module setup
 * @description We'll setup all neede modules. 
 */

// Setting up Express application
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const listener = app.listen(process.env.PORT, function() {
  console.log("Application is listening on port " + listener.address().port);
});