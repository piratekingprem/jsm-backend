const db = require("../../config/db");

exports.store = async (file, params) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  let image = file ? file.filename : null;
  try {
    const product = await db.query(
      `INSERT INTO product (product_name,main_image,product_description,product_short_description,subcategory_id,price,stock_quantity) VALUES (?,?,?,?,?,?,?)`,
      [
        params.product_name,
        image,
        params.product_description,
        params.product_short_description,
        params.subcategory_id,
        params.price,
        params.stock_quantity,
      ]
    );
    (message = "No product found"), (code = 400), (data = []);
    if (product.affectedRows) {
      (message = "Product created successfully"),
        (code = 201),
        (data = product);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};

exports.get = async () => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const product = await db.query(
      `SELECT 
    p.id,
    p.product_name,
    p.main_image,
    p.product_description,
    p.product_short_description,
    p.subcategory_id,
    p.price,
    p.stock_quantity,
    GROUP_CONCAT(DISTINCT pi.image_url) AS ImageURLs, 
    GROUP_CONCAT(DISTINCT CONCAT(f.featureName, ': ', f.featureValue) SEPARATOR '; ') AS Features
FROM 
    product p
LEFT JOIN 
    product_image pi ON p.id = pi.product_id
LEFT JOIN 
    product_feature f ON p.id = f.product_id
GROUP BY
    p.id
`,
      []
    );
    (message = "No product found"), (code = 400), (data = []);
    if (product.length) {
      (message = "Product fetched succesfully"), (code = 200), (data = product);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};

exports.get_id = async (id) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const product = await db.query(
      `SELECT 
    p.id,
    p.product_name,
    p.main_image,
    p.product_description,
    p.product_short_description,
    p.subcategory_id,
    p.price,
    p.stock_quantity,
    GROUP_CONCAT(DISTINCT pi.image_url) AS ImageURLs, 
    GROUP_CONCAT(DISTINCT CONCAT(f.featureName, ': ', f.featureValue) SEPARATOR '; ') AS Features
FROM 
    product p
LEFT JOIN 
    product_image pi ON p.id = pi.product_id
LEFT JOIN 
    product_feature f ON p.id = f.product_id
WHERE
    p.id = ${id}
GROUP BY
    p.id
`,
      []
    );
    (message = "No product found"), (code = 400), (data = []);
    if (product.length) {
      (message = "Product fetched succesfully"), (code = 200), (data = product);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};
exports.get_category_id = async (category_id) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const product = await db.query(
      `SELECT 
    p.id,
    p.product_name,
    p.main_image,
    p.product_description,
    p.product_short_description,
    p.subcategory_id,
    p.price,
    p.stock_quantity,
    GROUP_CONCAT(DISTINCT pi.image_url) AS ImageURLs, 
    GROUP_CONCAT(DISTINCT CONCAT(f.featureName, ': ', f.featureValue) SEPARATOR '; ') AS Features
FROM 
    product p
LEFT JOIN 
    product_image pi ON p.id = pi.product_id
LEFT JOIN 
    product_feature f ON p.id = f.product_id
WHERE
    p.subcategory_id = ${category_id}
GROUP BY
    p.id
`,
      []
    );
    (message = "No product found"), (code = 400), (data = []);
    if (product.length) {
      (message = "Product fetched succesfully"), (code = 200), (data = product);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};

exports.update = async (id, file, params) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  let image = file ? file.filename : null;
  try {
    const product = await db.query(
      `UPDATE product SET product_name = ?,main_image = ?,product_description = ?,product_short_description = ?,subcategory_id = ?,price = ?,stock_quantity = ? WHERE id = ${id}`,
      [
        params.product_name,
        image,
        params.product_description,
        params.product_short_description,
        params.subcategory_id,
        params.price,
        params.stock_quantity,
      ]
    );
    (message = "No product updated"), (code = 400), (data = []);
    if (product.affectedRows) {
      (message = "Successfully updated product"),
        (code = 200),
        (data = product);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};

exports.delete = async (id) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const product = db.query(`DELETE FROM product WHERE id = ${id}`, []);
    (message = "No product found"), (code = 400), (data = []);
    if (product.affectedRows) {
      (message = "Successfully deleted product"),
        (code = 200),
        (data = product);
    }
  } catch (error) {
    message = error;
  }

  return { message, code, data };
};
