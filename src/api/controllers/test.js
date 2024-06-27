const testModel = require('../models/test');

exports.get_test = async (req,res,next) =>{
    try {
        const test = await testModel.get();
        return res.send(test)
    } catch (error) {
        next(error);
    }
}

exports.store_test = async (req,res,next) => {
    try {
        const test = await testModel.store(req.body);
        return res.send(test);
    }catch(error){
        next(error);
    }
}