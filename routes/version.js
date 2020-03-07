"use strict";

/*!
 * wvraptor-core
 * @description Very strange module, Isn't it? This little route
 * will help us when we'll transfer some APIs to another places.
 * We won't be nedeed to update ALL code, just a list of all
 * routes.
 */

// Connect router.
const router = require('express').Router();

/*!
 * @section List of Routes
 * @description List of all current routes.
 */

let routes = {
  socket: "/"
};

/*!
 * @section GET requests
 * @description Some GET requests, nothing unusual.
 */

// Send all routes.
router.get('/routes', (req, res) => {
  res.end(JSON.stringify(routes));
});

router.get('/route/:route', (req, res) => {
  // Finding nedeed route.
  for (let element in routes) {
    if (element == req.params.route) {
      res.end(JSON.stringify({ name: element, route: routes[element] }));
      return;
    }     
  };

  // Sending error if it faults.
  res.status(404).end(JSON.stringify({ error: "Not found" }));
});


// Exporting our router.
module.exports = router;