module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS blogs(
        id INT AUTO_INCREMENT primary key,
        title VARCHAR(225) NULL,
        blog_image VARCHAR(225) NULL,
        short_description TEXT NULL,
        description TEXT NULL,
        author VARCHAR(225) NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": `DROP TABLE IF EXISTS blogs`
}