const userModel  = require('../models/users');

exports.get_user_list = async (req,res,next) => {
    try {
        const response = await userModel.get_users();
        return res.send(response); 
    } catch (error) {
        next(error);
    }
}
exports.get_user = async (req,res,next) =>{
    try {
        const response = await userModel.get_user_by_user(req.params.id);
        return res.send(response);
    } catch (error) {
        next(error);
    }
}
exports.create_user = async (req,res,next) => {
    try {
        const response = await userModel.store(req.body);
        return res.send(response);
    } catch (error) {
        next(error);
    }
}
exports.delete_user = async (req,res,next) => {
    try {
        const response = await userModel.delete(req.params.id);
        return res.send(response);
    } catch (error) {
        next(error)
    }
}