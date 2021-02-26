const { default: axios } = require('axios');


const httpGet = async (path) => {
  const response = await axios.get(path);
  return response;
};

const getCategories = async (body) => {
  const val = body.category;
  const quotesList = await httpGet(`https://backend-evaluation-lgsvu.ondigitalocean.app/category?name=${val}`);
//   console.log(quotesList);
  return quotesList.data;
};

const getItems = async ( item) => {
    
    const quotesList = await httpGet(`https://backend-evaluation-lgsvu.ondigitalocean.app/items/${item}`);
    
    return quotesList.data;
  };
module.exports = { httpGet, getCategories, getItems}