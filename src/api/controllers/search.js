const searchModel  = require('../models/search');

exports.search_products =  async (req,res,next) => {
    try {
        const products = await searchModel.get_search_product(req.query)
        return res.send(products);
    } catch (error) {
        next(error);
    }
 
}