const serivceModel = require('../models/service');

exports.store_service  = async (req,res,next) => {
    try {
        const service = await serivceModel.store(req.body);
        res.send(service);
    } catch (error) {
        next(error);
    }
}

exports.get_service = async (req,res,next) => {
    try {
        const serivce = await serivceModel.get();
        res.send(serivce);
    } catch (error) {
        next(error);
    }
}

exports.get_service_id = async (req,res,next)=>{
    try {
        const serivce = await serivceModel.get_id(req.params.id);
        res.send(serivce);
    } catch (error) {
        next(error);
    }
}

exports.update_service = async (req,res,next) => {
    try {
        const service = await serivceModel.update(req.params.id,req.body);
        res.send(service);
    } catch (error) {
        next(error);
    }
}

exports.delete_service = async (req,res,next) => {
    try {
        const serivce = await serivceModel.delete(req.params.id);
        res.send(serivce);
    } catch (error) {
        next(error);
    }
}