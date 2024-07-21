const db = require("../../config/db");

exports.store = async (file, params) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  let image = file ? file.filename : null;
  try {
    const pooja = await db.query(
      `INSERT INTO pooja (pooja_name, image, category_id, message, features) VALUES (?, ?, ?, ?, ?)`,
      [params.pooja_name, image, params.category_id, params.message, params.features]
    );
    (message = "Error in updating pooja"), (code = 400), (data = []);
    if (pooja.affectedRows) {
      (message = "Successfully created pooja"), (code = 201), (data = pooja);
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
    const poojaWithPriceTiers = await db.query(
      `SELECT 
        pooja.id, pooja.pooja_name, pooja.image, pooja.message, pooja.features,
        price_tier.id AS price_tier_id, price_tier.tier_name, price_tier.price, price_tier.features AS price_tier_features
      FROM 
        pooja
      LEFT JOIN 
        price_tier ON pooja.id = price_tier.pooja_id`,
      []
    );

    if (poojaWithPriceTiers.length) {
      // Group price tiers under the pooja
      const poojaMap = {};

      poojaWithPriceTiers.forEach((row) => {
        if (!poojaMap[row.id]) {
          poojaMap[row.id] = {
            id: row.id,
            pooja_name: row.pooja_name,
            image: row.image,
            message: row.message,
            features: row.features,
            price_tiers: [],
          };
        }

        if (row.price_tier_id) {
          poojaMap[row.id].price_tiers.push({
            id: row.price_tier_id,
            tier_name: row.tier_name,
            price: row.price,
            features: row.price_tier_features,
          });
        }
      });

      const pooja = Object.values(poojaMap);

      message = "Successfully fetched pooja";
      code = 200;
      data = pooja;
    } else {
      message = "No pooja found";
      code = 404;
    }
  } catch (error) {
    message = error.message || error;
  }
  return { message, code, data };
};

exports.get_by = async (id) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const poojaWithPriceTiers = await db.query(
      `SELECT 
        pooja.id, pooja.pooja_name, pooja.image, pooja.message, pooja.features,
        price_tier.id AS price_tier_id, price_tier.tier_name, price_tier.price, price_tier.features AS price_tier_features
      FROM 
        pooja
      LEFT JOIN 
        price_tier ON pooja.id = price_tier.pooja_id
      WHERE 
        pooja.id = ?`,
      [id]
    );

    if (poojaWithPriceTiers.length) {
      // Group price tiers under the pooja
      const poojaMap = {};

      poojaWithPriceTiers.forEach((row) => {
        if (!poojaMap[row.id]) {
          poojaMap[row.id] = {
            id: row.id,
            pooja_name: row.pooja_name,
            image: row.image,
            message: row.message,
            features: row.features,
            price_tiers: [],
          };
        }

        if (row.price_tier_id) {
          poojaMap[row.id].price_tiers.push({
            id: row.price_tier_id,
            tier_name: row.tier_name,
            price: row.price,
            features: row.price_tier_features,
          });
        }
      });

      const pooja = Object.values(poojaMap);

      message = "Successfully fetched pooja";
      code = 200;
      data = pooja;
    } else {
      message = "No pooja found";
      code = 404;
    }
  } catch (error) {
    message = error.message || error;
  }
  return { message, code, data };
};

exports.get_by_category_id = async (category_id) => {
  let message = "Something went wrong",code = 500,data = [];
  try {
    const poojaWithPriceTiers = await db.query(
      `SELECT 
        pooja.id, pooja.pooja_name, pooja.image, pooja.message, pooja.features,
        price_tier.id AS price_tier_id, price_tier.tier_name, price_tier.price, price_tier.features AS price_tier_features
      FROM 
        pooja
      LEFT JOIN 
        price_tier ON pooja.id = price_tier.pooja_id
      WHERE 
        pooja.category_id = ?`,
      [category_id]
    );

    if (poojaWithPriceTiers.length) {
      // Group price tiers under the pooja
      const poojaMap = {};

      poojaWithPriceTiers.forEach((row) => {
        if (!poojaMap[row.id]) {
          poojaMap[row.id] = {
            id: row.id,
            pooja_name: row.pooja_name,
            image: row.image,
            message: row.message,
            features: row.features,
            price_tiers: [],
          };
        }

        if (row.price_tier_id) {
          poojaMap[row.id].price_tiers.push({
            id: row.price_tier_id,
            tier_name: row.tier_name,
            price: row.price,
            features: row.price_tier_features,
          });
        }
      });

      const pooja = Object.values(poojaMap);

      message = "Successfully fetched pooja";
      code = 200;
      data = pooja;
    } else {
      message = "No pooja found";
      code = 404;
    }
  } catch (error) {
    message = error.message || error;
  }
  return { message, code, data };
}
exports.update = async (id, file, params) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  let image = file ? file.filename : null;
  try {
    const pooja = await db.query(
      `UPDATE pooja SET pooja_name = ?, image = ?,category_id = ?, message = ?, features = ? WHERE id = ?`,
      [params.pooja_name, image, params.category_id, params.message, params.features, id]
    );
    (message = "Error in updating pooja"), (code = 400), (data = []);
    if (pooja.affectedRows) {
      (message = "Successfully updated the pooja"),
        (code = 200),
        (data = pooja);
    }
  } catch (error) {
    message = error.message || error;
  }
  return { message, code, data };
};

exports.delete = async (id) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const pooja = await db.query(`DELETE FROM pooja WHERE id = ?`, [id]);
    (message = "Error in deleting pooja"), (code = 400), (data = []);
    if (pooja.affectedRows) {
      (message = "Successfully deleted pooja"), (code = 200), (data = pooja);
    }
  } catch (error) {
    message = error.message || error;
  }
  return { message, code, data };
};
