const db = require("../../config/db");

exports.store = async (file, params) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  let image = file ? file.filename : null;
  console.log(image, params);
  try {
    const banner = await db.query(
      `INSERT INTO banners(banner_image,banner_category) VALUES (?,?)`,
      [image, params.banner_category]
    );
    (message = "No banner found"), (code = 400), (data = []);
    if (banner.affectedRows) {
      (message = "Banner created successfully"), (code = 201), (data = banner);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};

exports.get_by_id = async (id) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const banner = await db.query(`SELECT * from banners WHERE id=${id}`, []);
    (message = "No banners found"), (code = 400), (data = []);
    if (banner.length) {
      (message = "Succesfully fetched banners"), (code = 200), (data = banner);
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
    const banner = await db.query(`SELECT * FROM banners`, []);
    (message = "No banners found"), (code = 400), (data = []);
    if (banner.length) {
      (message = "Succesfully fetched banners"), (code = 200), (data = banner);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};
exports.get_by_banner_category = async (banner_category) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  try {
    const banner = await db.query(
      `SELECT * from banners WHERE banner_category='${banner_category}'`,
      []
    );
    (message = "No banners found"), (code = 400), (data = []);
    if (banner.length) {
      (message = "Succesfully fetched banners"), (code = 200), (data = banner);
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
    const banner = await db.query(
      `UPDATE banners SET banner_image = ?,banner_category = ? WHERE id=${id}`,
      [image, params.banner_category]
    );
    (message = "Error in updating banner"), (code = 400), (data = []);
    if (banner.affectedRows) {
      (message = "Banner updated successfully"), (code = 200), (data = banner);
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
    const banner = await db.query(`DELETE FROM banners WHERE id=${id}`);
    (message = "Error in deleting banner"), (code = 400), (data = []);
    if (banner.affectedRows) {
      (message = "Banners deleted successfully"), (code = 200), (data = banner);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};
