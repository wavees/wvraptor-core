"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(JSON.stringify({ hello: "there" }));
});

module.exports = router;