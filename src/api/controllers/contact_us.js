const contact_usModel = require('../models/contact_us');

exports.store_contact_us = async (req,res,next) => {
    try {
        const contact_us = await contact_usModel.store(req.body);
        return res.send(contact_us);
    } catch (error) {
        next(error);
    }
}

exports.get_contact_us = async (req,res,next) => {
    try {
        const contact_us = await contact_usModel.get();
        return res.send(contact_us);
    } catch (error) {
        next(error);
    }
}

exports.get_contact_us_id = async (req,res,next) => {
    try {
        const contact_us = await contact_usModel.get_id(req.params.id);
        return res.send(contact_us);
    } catch (error) {
        next(error);
    }
}

exports.update_contact_us = async (req,res,next) => {
    try {
        const contact_us = await contact_usModel.update(req.params.id,req.body);
        return res.send(contact_us);
    } catch (error) {
        next(error);
    }
}

exports.delete_contact_us = async (req,res,next) => {
    try {
        const contact_us = await contact_usModel.delete(req.params.id);
        return res.send(contact_us);
    } catch (error) {
        next(error);
    }
}
