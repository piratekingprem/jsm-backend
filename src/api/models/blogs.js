const db = require("../../config/db");

exports.store = async (file, params) => {
  let message = "Something went wrong",
    code = 500,
    data = [];
  let image = file ? file.filename : null;
  try {
    const blogs = await db.query(
      `INSERT INTO blogs (title,blog_image,short_description,description,author) VALUES (?,?,?,?,?)`,
      [
        params.title,
        image,
        params.short_description,
        params.description,
        params.author,
      ]
    );
    (message = "Error in creating blogs"), (code = 400), (data = []);
    if (blogs.affectedRows) {
      (message = "Blogs created successfully"), (code = 201), (data = blogs);
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
    const blogs = await db.query(`SELECT * FROM blogs`, []);
    (message = "No blogs found"), (code = 400), (data = []);
    if (blogs.length) {
      (message = "Blogs fetched successfully"), (code = 200), (data = blogs);
    }
  } catch (error) {
    message = error;
  }

  return { message, code, data };
};

exports.get_id = async (id) => {
  let message = "Something went wrong",code = 500,data = [];
  try {
    const blogs = await db.query(`SELECT * FROM blogs WHERE id = ?`, [id]);
    (message = "No blogs found"), (code = 400), (data = []);
    if (blogs.length) {
      (message = "Blogs fetched successfully"), (code = 200), (data = blogs);
    }
  } catch (error) {
    message = error;
  }
  return { message, code, data };
};

exports.update = async (id,file,params) => {
    let message = "Something went wrong", code = 500, data = [];
    try {
        const blogs = await db.query(`UPDATE blogs SET title = ?,blog_image = ?,short_description = ?,description = ?,author = ? WHERE id = ${id}`,[])
        message = "Error in updating the blogs",code = 400,data = [];
        if(blogs.affectedRows){
            message = "Blogs updated successfully",code = 200,data = blogs;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.delete = async (id) => {
    let message = "Something went wrong", code = 500, data = [];
    try {
        const blogs = await db.query(`DELETE FROM blogs WHERE id = ${id}`,[]);
        message = "Error in deleting the blogs",code = 400,data = [];
        if(blogs.affectedRows){
            message = "Blogs deleted successfully",code = 200,data = blogs;
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}