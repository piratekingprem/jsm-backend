const db = require("../../config/db");

exports.get_search_product = async (query) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    // Query to search in the product table
    const productSearch = await db.query(
      `SELECT * FROM product WHERE product_name LIKE ?`,
      [`%${query.query}%`]
    );

    // Query to search in the pooja table
    const poojaSearch = await db.query(
      `SELECT * FROM pooja WHERE pooja_name LIKE ?`,
      [`%${query.query}%`]
    );

    // Combine the results
    data = [...productSearch, ...poojaSearch];

    if (data.length) {
      message = "Search results fetched successfully";
      code = 200;
    } else {
      message = "No results found";
      code = 404;
    }
  } catch (error) {
    message = error.message || "An error occurred";
  }
  return { message, code, data };
};
