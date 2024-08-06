const orderModel = require('../models/order');

exports.store_offline = async (req,res,next) => {
    try {
        const order  = await orderModel.store_offline_payment(req.body);
        return res.send(order);
    } catch (error) {
        next(error);
    }
}

exports.getOrder  = async (req,res,next) => {
    try {
        const order = await orderModel.get_the_order();
        return res.send(order);
    } catch (error) {
        next(error);
    }
}