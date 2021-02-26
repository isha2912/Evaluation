const { shopRouter } = require('../routes');
const fileOps = require('../utils/shop.utils');
const { Shop } = require('../models')
const { Op } = require('sequelize');

const postService = async (body) => {
    const getCat= await fileOps.getCategories(body);
    let itemList = [];
    let i=0;
    getCat.itemMetadata.forEach( item => {
        itemList[i] = item.id;
        i += 1;
    });

 itemList.forEach(async (item) => {
    const getItems = await (fileOps.getItems(item));
    const queryInserted = await Shop.create({cat_name: getCat.name,item_id:item, feat_name:getItems.features[0].name, feat_value:getItems.features[0].value })
  
    
})    

const finalItems = await Shop.findAll({ where: {
    cat_name: getCat.name,
  },})
    return finalItems;
}


const getService = async (body) =>{
    const featList = await Shop.findAll({attributes: ['feat_name', 'feat_value']}, {
        where :{
            cat_name:body.category,
        }
    });

    return featList;
}

const getQueryService = async (body) => {
    const featList = await Shop.findAll({attributes: ['item_id']},{
        where:{
            [Op.and]: [
                {  feat_name: body.name},
                {  feat_value: body.value},
                { cat_name:body.category}
              ]
           
            
            
        }
    })

    return featList;
}
module.exports = { postService, getService, getQueryService};