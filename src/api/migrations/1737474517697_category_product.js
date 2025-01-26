module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS category_product(
            id INT AUTO_INCREMENT primary key,
            category_name VARCHAR(255) NULL,
            category_image VARCHAR(255) NULL,
            created_at timestamp DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
        )`,
    "down": "DROP TABLE IF EXISTS category_product"
}