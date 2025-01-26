const db = require("../../config/db")
exports.store = async (file,params) => {
    let message = "Something went wrong",code = 500,data = []
    let image = file ? file.filename : null;
    console.log(image,params);
    try {
        const category_product = await db.query(
            `INSERT INTO `
        )
    } catch (error) {
        message(error);
    }
}