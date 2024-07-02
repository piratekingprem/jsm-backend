const product_features = require('../models/product_feature');

exports.store_product_feature = async (req,res,next) =>{
    try {
        const feature = await product_features.store(req.body);
        return res.send(feature);
    } catch (error) {
        next(error);
    }
}

exports.get_product_features = async (req,res,next)=>{
    try {
        const feature = await product_features.get();
        return res.send(feature);
    } catch (error) {
        next(error);
    }
}

exports.get_product_features_by_id = async (req,res,next) =>{
    try {
        const feature = await product_features.get_by_product_id(req.params.id);
        return res.send(feature);
    } catch (error) {
        next(error);
    }
}

exports.get_product_features_by_product_id = async (req,res,next) => {
    try {
        const feature = await product_features.get_by_product_id(req.params.product_id);
        return res.send(feature);
    } catch (error) {
        next(error);
    }
}

exports.update_product_feature = async (req,res,next) => {
    try {
        const feature = await product_features.update(req.params.id,req.body)
        return res.send(feature);
    } catch (error) {
        next(error);       
    }
}

exports.delete_product_features = async (req,res,next) => {
    try {
        const feature = await product_features.delete(req.params.id)
        return res.send(feature);
    } catch (error) {
        next(error);
    }
}