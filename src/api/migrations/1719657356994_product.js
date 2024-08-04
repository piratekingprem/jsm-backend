module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS product(
        id INT AUTO_INCREMENT primary key,
        product_name varchar(36) NULL,
        main_image varchar(225) NULL,
        product_description TEXT NULL,
        product_short_description TEXT NULL,
        subcategory_id INT,
        price decimal(10,2),
        stock_quantity INT,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": `DROP TABLE IF EXISTS product`
}