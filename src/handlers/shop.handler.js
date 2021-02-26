const fileService = require('../services/shop.service')

const postHandler = async (req, res) => {
    const {body} =req;
    const catValues = await fileService.postService(body);
    res.status(201).send(catValues);

}

const getHandler = async (req, res) => {
    const { body} = req;
    const featValues =  await fileService.getService(body);
    console.log(featValues);
    res.status(200).send(featValues);
}


const getQueryHandler = async (req, res) => {
    const { body } = req;
    const itemValues = await fileService.getQueryService(body);
    res.status(200).send(itemValues);
}
module.exports = { postHandler, getHandler, getQueryHandler}