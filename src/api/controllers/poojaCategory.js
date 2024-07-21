const poojaCategoryModel = require('../models/poojaCategory');

exports.store_pooja_category = async (req,res,next) => {
    try {
        const pooja_category = await poojaCategoryModel.store(req.body);
        return res.send(pooja_category)
    } catch (error) {
        next(error);
    }
} 

exports.get_pooja_category = async (req,res,next) => {
    try {
        const pooja_category = await poojaCategoryModel.get();
        return res.send(pooja_category);
    } catch (error) {
        next(error);
    }
}

exports.get_pooja_category_by_id = async (req,res,next) => {
    try {
        const pooja_category = await poojaCategoryModel.get_by(req.params.id);
        return res.send(pooja_category);
    } catch (error) {
        next(error);      
    }
}

exports.update_pooja_category = async (req,res,next) =>{
    try {
        const pooja_category = await poojaCategoryModel.update(req.params.id,req.body);
        return res.send(pooja_category);
    } catch (error) {
        next(error);
    }
}

exports.delete_pooja_category = async (req,res,next) => {
    try {
        const pooja_category = await poojaCategoryModel.delete(req.params.id);
        return res.send(pooja_category);
    } catch (error) {
        next(error);
    }
}