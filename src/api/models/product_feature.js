const db = require('../../config/db');

exports.store = async (params) => {
    let message = "Something went wrong",code = 500,data= [];
    try {
        const features = await db.query(
            `INSERT INTO product_feature (product_id,featureName,featureValue) VALUES (?,?,?)`,[params.product_id,params.featureName,params.featureValue]
        )
        message = "No features found",code = 400,data = [];
        if(features.affectedRows){
            message = "Feature added successfully",code = 200,data = features;
        }
    } catch (error) {
        message = error;
    }   
    return {message,code,data}
}

exports.get = async () => {
    let message = "Something went wrong",code = 500,data= [];
    try {
        const features = await db.query(
            `SELECT * FROM product_feature`,[]
        )
        message = "No features found",code = 400,data = [];
        if(features.length){
            message = "Features found",code = 200,data = features;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.get_id = async (id) => {
    let message = "Something went wrong",code = 500,data= [];
    try {
        const features = await db.query(
            `SELECT * FROM product_feature WHERE id = ?`,[id]
        );
        message = "No features found",code = 400,data = [];
        if(features.length){
            message = "Features found",code = 200,data = features;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
} 

exports.get_by_product_id = async (products_id) => {
    let message = "Something went wrong",code = 500,data= [];
    try {
        const features = await db.query(
            `SELECT * FROM product_feature WHERE product_id = ${products_id}`,[]
        );
        message = "No features found",code = 400,data = [];
        if(features.length){
            message = "Features found",code = 200,data = features;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.update = async (id,params) => {
    let message = "Somwthing went wrong",code = 500, data = [];
    try {
        const features = await db.query(
            `UPDATE product_feature SET product_id = ?,featureName = ?,featureValue = ? WHERE id = ?`,[params.product_id,params.featureName,params.featureValue,id]
        )
        message = "Error in updating the product_features",code = 400,data = [];
        if(features.affectedRows){
            message = "Product features updated",code = 200,data = features;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
};

exports.delete = async (id) => {
    let message = "Something went wrong",code = 500,data= [];
    try {
        const features = await db.query(
            `DELETE from product_feature WHERE id = ?`,[id]
        )
        message = "Error in deleting the product_features",code = 400,data = [];
        if(features.length){
            message = "Product features deleted",code = 200,data = features;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}