const productModel = require('../models/product');

exports.store_product = async (req,res,next)=>{
    try {
        const product = await productModel.store(req.body);
        return res.send(product);
    } catch (error) {
        next(error);
    }
}

exports.get_product = async (req,res,next) => {
    try {
        const product = await productModel.get();
        return res.send(product);
    } catch (error) {
        next(error);
    }
}

exports.get_product_id = async (req,res,next)=>{
    try {
        const product = await productModel.get_id(req.params.id);
        return res.send(product);
    } catch (error) {
        next(error);
    }
}

exports.update_product = async (req,res,next) => {
    try {
        const product = await productModel.update(req.params.id,req,body);
        return res.send(product);
    } catch (error) {
        next(error);      
    }
}

exports.delete_product = async (req,res,next) => {
    try {
        const product = await productModel.delete(req.params.id);
        return res.send(product);
    } catch (error) {
        next(error);
    }
}