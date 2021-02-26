const fileService = require('../services/shop.service')
const Joi = require('joi');

const postHandler = async (req, res) => {
    const {body} =req;
    const postSchema = Joi.object().keys({
        category: Joi.string().required(),
        
      });
      const { value, error } = postSchema.validate(body);
      if (error) {
        return res.status(400).send('Bad Requests');
      }

    const catValues = await fileService.postService(body);
    res.status(201).send(catValues);

}

const getHandler = async (req, res) => {
    const {body} =req;
    const getSchema = Joi.object().keys({
        category: Joi.string().required(),
        
      });
      const { value, error } = getSchema.validate(body);
      if (error) {
        return res.status(400).send('Bad Requests');
      }

    const featValues =  await fileService.getService(body);
    console.log(featValues);
    res.status(200).send(featValues);
}


const getQueryHandler = async (req, res) => {
    const name= req.params.name;
    const value=req.params.value;
    const category=req.params.category;
    const itemValues = await fileService.getQueryService(name,value,category);
    res.status(200).send(itemValues);
}
module.exports = { postHandler, getHandler, getQueryHandler}