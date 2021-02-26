const express = require('express');

const router = express.Router();
const { postHandler, getHandler } = require('../handlers/shop.handler');

router.post('', postHandler);
router.get('', getHandler);

module.exports = {
  router,
};
