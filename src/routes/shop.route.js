const express = require('express');
const { postHandler, getHandler, getQueryHandler } = require('../handlers/shop.handler');
const router = express.Router();


router.post('', postHandler);
router.get('', getHandler);
router.get('/query', getQueryHandler)

module.exports = {
  router,
};
