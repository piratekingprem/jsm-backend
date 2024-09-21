const db = require('../../config/db');

exports.store = async (params) =>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const price_tier = await db.query(
            `INSERT INTO price_tier (pooja_id,tier_name,price,features) VALUES (?,?,?,?)`,[params.pooja_id,params.tier_name,params.price,params.features]
        )
        message = "Error creating price tier",code = 400,data = [];
        if(price_tier.affectedRows){
            message = "Price tier created successfully",code = 200,data = price_tier;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}
exports.get = async () => {
    let message = "Something went wrong",code = 500,data = [];
    try {
        const price_tier = await db.query(
            `SELECT * FROM price_tier`,[]
        )
        message = "Error getting price tiers",code = 400,data = [];
        if(price_tier.length){
            message = "Price tiers retrieved successfully",code = 200,data = price_tier;
        }
    } catch (error) {
        message = error
    };
    return {message,code,data}
}
exports.get_id = async (id) =>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const price_tier = await db.query(
            `SELECT * FROM price_tier WHERE id = ?`,[id]
        )
        message="Error getting price tier",code = 400,data = [];
        if(price_tier.length){
            message = "Price tier retrieved successfully",code = 200,data = price_tier;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}
exports.update = async (id,params) => {
    let message = "Something went wrong",code = 500,data = [];
    try {
        const price_tier = await db.query(
            `UPDATE price_tier SET pooja_id= ?,tier_name = ?,price = ?,features = ? WHERE  id = ?`,[params.pooja_id,params.tier_name,params.price,params.features,id]
        )
        message = "Error updating price tier",code = 400,data = [];
        if(price_tier.affectedRows){
            message = "Price tier updating successfully",code = 200,data = price_tier;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}
exports.update_price = async (id,params) => {
    let message = 'Something went wrong',code = 500,data = [];
    try {
        const price = await db.query(
            `UPDATE price_tier SET price = ? WHERE id = ?`,[params.price,id]
        )
        message = "Error updating price",code = 400, data = [];
        if(price.affectedRows){
            message = "Price updated successfully",code = 400,data = [];
        }

 }catch(error){
    message = error;
 }
 return {message,code,data};
 
}
exports.delete = async (id) => {
    let message = "Something went wrong",code = 500,data = [];
    try {
        const price_tier = await db.query(
            `DELETE FROM price_tier WHERE id = ${id}`,[]
        );
        message = "Error in deleting price_tier",code = 400,data = [];
        if(price_tier.affectedRows){
            message = "Price tier deleted successfully",code = 200,data = price_tier;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}