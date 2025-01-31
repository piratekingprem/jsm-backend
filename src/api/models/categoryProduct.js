const db = require("../../config/db");

exports.store = async (file, params) => {
    let message = "Something went wrong", code = 500, data = []
    let image = file ? file.filename : null;
    console.log(image, params);
    try {
        const category_product = await db.query(
            `INSERT INTO category_product (category_name,category_image) VALUES (?,?)`,
            [
                params.category_name,
                image
            ]
        );
        message = "No category found",
            code = 401;
        data = []
        if (category_product.affectedRows) {
            message = "Product created succesfully",
                code = 201,
                data = category_product
        }
    } catch (error) {
        message = error;
    }
    return { message, code, data };
};

exports.get = async () => {
    var message = "Something went wrong", code = 500, data = [];
    try {
        const category_product = await db.query(`SELECT * FROM category_product ORDER BY id`);
        message = "No category found", code = 400, data = [];
        if (category_product.length) {
            message = "Product found successfully",
                code = 200,
                data = category_product
        }
    } catch (error) {
        message = error;
    }
    return { message, code, data };
}

exports.get_category_byId = async (id) => {
    var message = "Something went wrong", code = 500, data = [];
    try {
        const category_product = await db.query(`SELECT * FROM category_product WHERE id = ? WHERE ORDER BY category_name`, [id]);
        message = "No category found", code = 400, data = [];
        if (category_product.length) {
            message = "Product found successfully",
                code = 200,
                data = category_product
        }
    } catch (error) {
        message = error;
    }
    return { message, code, data };
};