const db = require('../../config/db');

exports.store = async (params) =>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const pooja_category = await db.query(
            `INSERT INTO poojaCategory(category_name) VALUES (?)`,[params.category_name]
        );
        message = "Error creating pooja category",code = 400,data = [];
        if(pooja_category.affectedRows){
            message = "Pooja category created successfully",code = 201,data = pooja_category;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data}
}

exports.get = async () => {
    let message = "Something went wrong",code = 500, data = [];
    try {
        const pooja_category = await db.query(
            `SELECT * FROM poojaCategory`,[]
        )
        message = "No pooja category found",code = 400,data = [];
        if(pooja_category.length){
            message = "Pooja category created successfully",code = 200,data = pooja_category;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}

exports.get_by = async (id) => {
    let message = "Something went wrong",code = 500, data = [];
    try {
        const pooja_category = await db.query(
            `SELECT * FROM poojaCategory WHERE id = ?`,[id]
        );
        message = "No pooja category found",code = 400,data = [];
        if(pooja_category.length){
            message = "Pooja category fetched successfully",code= 200,data = pooja_category;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}

exports.update = async (id,params) => {
    let message = "Something went wrong",code = 500,data = [];
    try {
        const pooja_category = await db.query(
                `UPDATE poojaCategory SET category_name = ? WHERE id = ?`,[params.category_name,id]
        )
        message = "Error updating pooja category",code = 400,data = [];
        if(pooja_category.affectedRows){
            message = "Pooja category updated successfully",code = 201,data = pooja_category
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}

exports.delete = async (id) => {
    let message = "Something went wrong",code = 500,data= [];
    try {
        const pooja_category = await db.query(
            `DELETE FROM poojaCategory WHERE id = ${id}`,[]
        )
        message = "Error in deleting pooja category",code = 400,data = [];
        if(pooja_category.affectedRows){
            message = "Pooja category deleting successfully",code = 200,data = pooja_category
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}