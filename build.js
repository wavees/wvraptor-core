"use strict";

/*!
 * wvraptor-core Dummy test module
 * @description This is a very dummy module for testing
 * this application. It'll just try to imitate normal app
 * startup and then just exit with code 0. Very dumb, isn't it?
 * 
 * @warning It will be replaced with normal testing
 * tools soon!
 */


/*!
 * @section Connecting modules
 * @description Here we'll connect all nedeed modules.
 */
console.log("[Build] Connecting modules...");

const path       = require('path');
const express    = require('express');
const app        = express();
const http       = require('http').createServer(app);
const cors       = require('cors');
const io         = require('socket.io')(http);

/*!
 * @section Preparing modules
 * @description Here we'll prepare all our modules
 * to work properly.
 */
console.log("[Build] Preparing modules...");

const bodyParser = require('body-parser');

const helpers    = {
  walk: require('./helpers/files/walk'),
  socketSetup: require('./helpers/socket/setup')
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

helpers.socketSetup(io);


/*!
 * @section Integrating routes
 * @description And here we'll require all our routes
 * from ./routes directory.
 */
console.log("[Build] Integrating routes...");

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


/*!
 * @section Ending
 * @description Here we'll exit our application.
 */

const listener = http.listen(3000, function() {
  console.log("[Build] App have been started...")

  console.log("[Build] Exiting...");
  process.exit(0);
});