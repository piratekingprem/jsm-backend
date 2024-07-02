const blogsModel = require('../models/blogs');

exports.store_blogs = async (req,res,next) => {
    try {
        const blogs = await blogsModel.store(req.file,req.body);
        return res.send(blogs);
    } catch (error) {
        next(error);
    }
}

exports.get_blogs = async (req,res,next) => {
    try {
        const blogs = await blogsModel.get();
        return res.send(blogs);
    } catch (error) {
        next(error);
    }
}

exports.get_blogs_by_id = async (req,res,next) => {
    try {
        const blogs = await blogsModel.get_id(req.params.id);
        return res.send(blogs);
    } catch (error) {
        next(error);
    }
}

exports.update_blogs = async (req,res,next) => {
    try {
        const blogs = await blogsModel.update(req.params.id,req.body);
        return res.send(blogs)
    } catch (error) {
        next(error)
    }
}

exports.delete_blogs = async (req,res,next) => {
    try {
        const blogs = await blogsModel.delete(req.params.id);
        return res.send(blogs);
    } catch (error) {
        
    }
}