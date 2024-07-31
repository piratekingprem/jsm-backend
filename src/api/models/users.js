const db = require('../../config/db');
const bcrypt = require("bcrypt");

exports.get_users = async () => {
    let message = 'Something went wrong', code = 500, data = [];
    try {
        const users = await db.query(
            `SELECT * FROM user ORDER BY created_at DESC`,[0]
        );
        message = "No users found",code = 404,data = [];
        if(users.length){
            message = "User list fetched",code = 200,data = users;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data}
}

exports.get_user_by_user = async (id) =>{
    let message = 'Something went wrong', code = 500, data = [];
    try {
        const user = await db.query(
            `SELECT * FROM user WHERE id = ?`,[id]
        );
        message = "No user found",code = 404,data =  [];
        if(user.length){
            message = "User fetched successfully",
            code = 200,
            data  = user
        }
    } catch (error) {
        message = error
    }
    return {message ,code , data}
}
exports.get_user_by_email = async (email) => {
    let message = 'Something went wrong',code = 500,data = [];
    try {
        const user = await db.query(
            `SELECT * FROM user WHERE email = ?`,[email]
        )
        message = "No user found",code = 400,data = [];
        if(user.length){
            message = "User fetched successfully",code = 200,data = user[0]
        }
    } catch (error) {
        message = error
    }
    return {message ,code,data}
}
exports.store = async (params) => {
    let message =  "Something went wrong",code = 500,data = [];
    try {
        const password = await bcrypt.hash(params.password, 10);
        const user = await db.query(
            `INSERT INTO user(username,email,mobile,password) VALUES (?,?,?,?)`,[params.username,params.email,params.mobile,password]
        );
        message = "Error in creating user",code = 400,data = [];
        if(user.affectedRows){
            message = "User created successfully",code = 201,data = user
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}
exports.update = async (id,params) => {
    let message = "Something went wrong",code = 500, data = [];
    try {
        const user = await db.query(
            `UPDATE user SET username  = ?, email = ?, mobile = ? WHERE id = ?`,[params.username,params.email,params.mobile,id]
        );
        message = "Error in updating user",code = 400,data = [];
        if(results.affectedRows){
            message = "User updated successfully",code = 200,data = user
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}
exports.delete = async (id) =>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const results = await db.query(
            `DELETE FROM user WHERE id = ?`,[id]
        );
        message = "Error in deleting user",code = 400,data = []
        if(results.affectedRows){
            message = "User is deleted permanently",code = 400,data = results;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}