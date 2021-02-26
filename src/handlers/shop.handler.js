const fileService = require('../services/shop.service')

const postHandler = async (req, res) => {
    const {body} =req;
    const catValues = await fileService.postService(body);
    res.status(201).send(catValues);

}

const getHandler = async (req, res) => {
    const { body} = req;
    const featValues =  await fileService.getService(body);
    res.status(200).send(featValues);
}

module.exports = { postHandler, getHandler}