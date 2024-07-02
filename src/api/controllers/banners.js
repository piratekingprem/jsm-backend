const bannerController = require('../models/banner');

exports.store_banner = async (req,res,next) => {
    try {
        const banner = await bannerController.store(req.file,req.body)
        return res.send(banner);
    } catch (error) {
        next(error);
    }
}

exports.get_banner = async (req,res,next) => {
    try {
        const banner  = await bannerController.get();
        return res.send(banner);
    } catch (error) {
        next(error);
    }
}
exports.get_banner_by_id = async (req,res,next) => {
    try {
        const banner = await bannerController.get_by_id(req.params.id);
        return res.send(banner);
    } catch (error) {
        next(error);
    }
}
exports.get_banner_by_banner_category = async (req,res,next) => {
    try {
        const banner = await bannerController.get_by_banner_category(req.params.banner_category);
        return res.send(banner);
    } catch (error) {
        next(error);
    }
}
exports.update_banner = async (req,res,next) => {
    try {
        const banner = await bannerController.update(req.params.id,req.file,req.body)
        return res.send(banner);
    } catch (error) {
        next(error);
    }
}
exports.delete_banner = async (req,res,next) => {
    try {
        const banner = await bannerController.delete(req.params.id)
        return res.send(banner);
    } catch (error) {
        next(error);
    }
}