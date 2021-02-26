const express = require('express');
const { postHandler, getHandler, getQueryHandler } = require('../handlers/shop.handler');
const router = express.Router();



router.get('', getHandler);
router.get('/query/:name/:value/:category', getQueryHandler)
router.post('', postHandler);

module.exports = {
  router,
};
