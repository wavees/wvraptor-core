"use strict";

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
const path       = require('path');

const express    = require('express');
const cors       = require('cors');

const bodyParser = require('body-parser');

// Helpers object.
const helpers    = {
  // walk: Loop files in certain directory;
  walk: require('./helpers/files/walk')
};

// Database module
const database   = require('./helpers/database/index');

/*!
 * @section Module setup
 * @description We'll setup all neede modules. 
 */

// Setting up Express application
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/*!
 * @section Connecting routes
 * @description Now we are ready to connect
 * all routes, that'll power our application!
 */

helpers.walk("./routes", (error, files) => {
  if (error) throw new Error('There was an error while listing ./route directory');
  files.forEach((file) => {
    let module = require(file);
    let filePath = path.relative(__dirname + '/routes', file).split('.').shift();

    try {
      app.use(`/${ filePath == "index" ? "" : filePath}`, module);
    }
    catch(error) {
      throw new Error(`File: routes/${filePath}.js; ${error}`);
    }

  });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Application is listening on port " + listener.address().port);
});