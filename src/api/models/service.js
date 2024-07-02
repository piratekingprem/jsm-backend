const db = require('../../config/db');

const convertDateToSQLFormat = (date) => {
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
};

exports.store = async (params) => {
    let message = "Something went wrong", code = 500, data = [];
    try {
        let eventDate = convertDateToSQLFormat(params.event_date);

        const service = await db.query(
            `INSERT INTO service (name, email, mobile, event_date, guests, additional_details) VALUES (?, ?, ?, ?, ?, ?)`,
            [params.name, params.email, params.mobile, eventDate, params.guests, params.additional_details]
        );

        if (service.affectedRows) {
            message = "Service added successfully";
            code = 201;
            data = service;
        } else {
            message = "No service found";
            code = 400;
            data = [];
        }
    } catch (error) {
        message = error.message; 
    }
    return { message, code, data };
};


exports.get = async () => {
    let message = "Something went wrong",code = 500, data = [];
    try {
        const service = await db.query(
            `SELECT * FROM service`,[]
        )
        message = "No service found",code = 400,data = [];
        if(service.length){
            message = "Service found",code = 200,data = service;
        }
    } catch (error) {
        message = error
    }

    return {message,code,data};
}

exports.get_id = async (id)=>{
    let message = "Something went wrong",code = 500, data = [];
    try {
        const service = await db.query(
            `SELECT * FROM service WHERE id = ${id}`,[]
        )
        message = "No serivce found",code = 400,data = [];
        if(service.length){
            message = "service found",code = 200,data = service;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.update = async (id,params) => {
    let message = "Something went wrong",code = 500, data = [];
    try {
        const service = await db.query(
            `UPDATE service SET name = ?,email = ?,mobile = ?,event_date = ?,guests = ?,additional_details = ? WHERE id = ${id}`,[params.name,params. email,params.mobile,params.event_date,params.guests,params.additional_details]
        )
        message = "No service found",code = 400,data = [];
        if(service.affectedRows){
            message = "Service updated successfully",code = 200,data = service;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}

exports.delete = async (id) => {
    let message = "Something went wrong",code = 500, data = [];
    try {
        const serivce = await db.query(
            `DELETE FROM service WHERE id = ${id}`,[]
        )
        message = "No service found",code = 400,data = [];
        if(serivce.length){
            message = "Service deleted successfully",code = 200,data = serivce;
        }
    } catch (error) {
        message = error;        
    }
    return {message,code,data};
}
