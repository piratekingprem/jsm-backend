const db = require('../../config/db');

exports.store = async (params) => {
    let message = "Something went wrong",code = 500,data = [];
    try {
        const enquiry_form = await db.query(
            `INSERT INTO enquiry_form(name,email,enquiry_about,mobile,message) VALUES (?,?,?,?,?)`,[params.name,params.email,params.enquiry_about,params.mobile,params.message]
        )
        message = "Error in creating Contact us",code = 401,data = [];
        if(enquiry_form.affectedRows){
            message = "Enquiry form created successfully",code = 201,data = enquiry_form;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.get = async () =>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const enquiry_form = await db.query(
            `SELECT * FROM enquiry_form`,[]
        )
        message = "No enquiry form found",code = 200,data = [];
        if(enquiry_form.length){
            message = "enquiry form found successfully",code = 200,data = enquiry_form;
        }
    } catch (error) {
        message = error
    }

    return {message,code,data};
}

exports.get_id = async (id)=>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const enquiry_form = await db.query(
            `SELECT * FROM enquiry_form where id = ${id}`,[]
        )
        message = "No contact us found",code = 400,data = [];
        if(enquiry_form.length){
            message = "enquiry form found successfully",code = 200,data = enquiry_form;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}

exports.update = async (id,params) => {
    let message = "Something went wrong",code = 500,data = [];
    try{
        const enquiry_form = await db.query(
            `UPDATE enquiry_form SET name = ?,email = ?,mobile = ?,enquiry_about = ?,message = ? WHERE id=${id}`,[params.name,params.email,params.mobile,params.enquiry_about,params.message]
        )
        message = "enquiry form updated successfully",code = 400,data = [];
        if(enquiry_form.affectedRows){
            message = "enquiry form updated successfully",code = 200,data = enquiry_form;
        }
    }catch(error){
        message = error;
    }
    return {message,code,data};
}

exports.delete = async (id) => {
    let message = "Something went wrong",code = 500,data = [];
    try{
        const enquiry_form = await db.query(
            `DELETE FROM enquiry_form WHERE id=${id}`,[]
        )
        message = "Error in deleting enquiry form",code = 400,data = [];
        if(contact_us.affectedRows){
            message="enquiry form deleted successfully",code = 200,data = enquiry_form;
        }
    }catch(error){
        message = error;
    }
    return {message,code,data};
}