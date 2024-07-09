const poojaModel = require('../models/pooja');

exports.store_pooja = async (req,res,next) => {
    try {
        const pooja = await poojaModel.store(req.file,req.body);
        return res.send(pooja);
    } catch (error) {
        next(error);
    }
}

exports.get_pooja = async (req,res,next) =>{
    try {
        const pooja = await poojaModel.get();
        return res.send(pooja);
    } catch (error) {
        next(error)
    }
}
exports.get_pooja_by_id = async (req,res,next) => {
    try {
        const pooja = await poojaModel.get_by(req.params.id);
        return res.send(pooja);
    } catch (error) {
        next(error);
    }
}
exports.update_pooja = async (req,res,next) => {
    try {
        const pooja = await poojaModel.update(req.params.id,req.file,req.body);
        return res.send(pooja);
    } catch (error) {
        next(error);
    }
}
exports.delete_pooja = async (req,res,next) =>{
    try {
        const pooja = await poojaModel.delete(req.params.id);
        return res.send(pooja);
    } catch (error) {
        next(error);
    }
}