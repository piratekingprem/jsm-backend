const cartModel = require('../models/cart');

exports.store_cart = async (req,res,next) => {
    try {
        const cart = await cartModel.store(req.body);
        return res.send(cart);
    } catch (error) {
        next(error);
    }
}

exports.get_cart = async (req,res,next) => {
    try {
        const cart = await cartModel.get();
        return res.send(cart);
    } catch (error) {
        next(error);
    }
}

exports.get_cart_by_id = async (req,res,next) => {
    try {
        const cart = await cartModel.get_by_id
    } catch (error) {
        
    }
}
exports.get_by_cart_user_id = async (req,res,next) => {
    try {
        const carts = await cartModel.get_by_cart_user_id(req.params.userId);
        return res.send(carts);
    } catch (error) {
        next(error)
    }
}
exports.update_cart = async (req,res,next) => {
    try {
        const cart  = await cartModel.update(req.params.id,req.body);
        return res.send(cart)
    } catch (error) {
        next(error);
    }
}
exports.delete_cart = async (req,res,next) => {
    try {
        const cart  = await cartModel.delete(req.params.id);
        return res.send(cart)
    } catch (error) {
        next(error);
    }
}