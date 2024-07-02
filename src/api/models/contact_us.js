const db = require('../../config/db');

exports.store = async (params) => {
    let message = "Something went wrong",code = 500,data = [];
    try {
        const contact_us = await db.query(
            `INSERT INTO contact_us(name,email,mobile,message) VALUES (?,?,?,?)`,[params.name,params.email,params.mobile,params.message]
        )
        message = "Error in creating Contact us",code = 201,data = [];
        if(contact_us.affectedRows){
            message = "Contact us created successfully",code = 200,data = contact_us;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.get = async () =>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const contact_us = await db.query(
            `SELECT * FROM contact_us`,[]
        )
        message = "No contact us found",code = 200,data = [];
        if(contact_us.length){
            message = "Contact us found successfully",code = 200,data = contact_us;
        }
    } catch (error) {
        message = error
    }

    return {message,code,data};
}

exports.get_id = async (id)=>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const contact_us = await db.query(
            `SELECT * FROM contact_us where id = ${id}`,[]
        )
        message = "No contact us found",code = 400,data = [];
        if(contact_us.length){
            message = "Contact us found successfully",code = 200,data = contact_us;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}

exports.update = async (id,params) => {
    let message = "Something went wrong",code = 500,data = [];
    try{
        const contact_us = await db.query(
            `UPDATE contact_us SET name = ?,email = ?,mobile = ?,message = ? WHERE id=${id}`,[params.name,params.email,params.mobile,params.message]
        )
        message = "Contact us updated successfully",code = 400,data = [];
        if(contact_us.affectedRows){
            message = "Contact us updated successfully",code = 200,data = contact_us;
        }
    }catch(error){
        message = error;
    }
    return {message,code,data};
}

exports.delete = async (id) => {
    let message = "Something went wrong",code = 500,data = [];
    try{
        const contact_us = await db.query(
            `DELETE FROM contact_us WHERE id=${id}`,[]
        )
        message = "Error in deleting Contact us",code = 400,data = [];
        if(contact_us.affectedRows){
            message="Contact us deleted successfully",code = 200,data = contact_us;
        }
    }catch(error){
        message = error;
    }
    return {message,code,data};
}