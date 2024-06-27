const db = require('../../config/db');

exports.store = async (params) =>{
    let message = "Something went wrong",code = 500,data = [];
    try {
        const test = await db.query(
            `INSERT INTO test (tester_name) VALUES (?)`,[params.tester_name]
        )
        message = "Error in creating test",code = 400,data = [];
        if(test.affectedRows)
            message = "Test created successfully",code = 201,data = test;
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.get = async () => {
    let message = "Something went wrong",code = 500,data = [];
    try {
        const test = await db.query(
            `SELECT * FROM test`,[]
        )
        message = "No test found",code = 400,data = [];
        if(test.length){
            message = "Test found successfully",code = 200,data = test;
        }
    } catch (error) {
        message = error
    }
    return {message,code,data};
}