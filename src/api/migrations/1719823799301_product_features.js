module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS product_feature(
        id INT AUTO_INCREMENT primary key,
        product_id INT Null,
        featureName VARCHAR(225) NULL,
        featureValue VARCHAR(225) NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": `DROP TABLE IF EXISTS product_feature`
}