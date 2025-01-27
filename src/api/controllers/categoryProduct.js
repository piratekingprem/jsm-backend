const categoryProduct_model = require("../models/categoryProduct");

exports.store_categoryProduct = async (req,res,next) => {
    try {
        const category_product = await categoryProduct_model.store(req.file,req.body);
        return res.send(category_product);
    } catch (error) {
        next(error);
    }
}

exports.get_categoryProduct = async (req,res,next) => {
    try {
        const category_product = await categoryProduct_model.get();
        return res.send(category_product);
    } catch (error) {
        next(error);
    }
}

exports.get_categoryProduct_by_id = async (req,res,next) => {
    try {
        const category_product = await categoryProduct_model.get_category_byId(req.params.id);
        return res.send(category_product);
    } catch (error) {
        next(error);
    }
}