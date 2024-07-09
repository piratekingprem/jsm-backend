const price_tierModel = require('../models/price_tier');

exports.store_price_tier = async (req,res,next) =>{
    try {
        const price_tier = await price_tierModel.store(req.body);
        return res.send(price_tier);
    } catch (error) {
        next(error);
    }
} 
exports.get_price_tier = async(req,res,next) =>{
    try {
        const price_tier = await price_tierModel.get();
        return res.send(price_tier);
    } catch (error) {
        next(error);
    }
}
exports.get_price_tier_by_id = async(req,res,next) => {
    try {
        const price_tier = await price_tierModel.get_id(req.params.id);
        return res.send(price_tier);
    } catch (error) {
        next(error);
    }
}
exports.update_price_tier = async (req,res,next) => {
    try {
        const price_tier = await price_tierModel.update(req.params.id,req.body);
        return res.send(price_tier);
    } catch (error) {
        next(error);
    }
}
exports.delete_price_tier = async (req,res,next) => {
    try {
        const price_tier = await price_tierModel.delete(req.params.id);
        return res.send(price_tier);
    } catch (error) {
        next(error);
    }
}