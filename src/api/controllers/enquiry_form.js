const enquiry_form = require('../models/enquiry_form');

exports.store_enquiry_form = async (req,res,next) => {
    try {
        const enquiry = await enquiry_form.store(req.body);
        return res.send(enquiry);
    } catch (error) {
        next(error);
    }
}

exports.get_enquiry_form = async (req,res,next) => {
    try {
        const enquiry = await enquiry_form.get();
        return res.send(enquiry);
    } catch (error) {
        next(error);
    }
}

exports.get_enquiry_form_id = async (req,res,next) => {
    try {
        const enquiry = await enquiry_form.get_id(req.params.id);
        return res.send(enquiry);
    } catch (error) {
        next(error);
    }
}

exports.update_enquiry_form = async (req,res,next) => {
    try {
        const enquiry = await enquiry_form.update(req.params.id,req.body);
        return res.send(enquiry);
    } catch (error) {
        next(error);
    }
}

exports.delete_enquiry_form = async (req,res,next) => {
    try {
        const enquiry = await enquiry_form.delete(req.params.id);
        return res.send(enquiry);
    } catch (error) {
        next(error);
    }
}
