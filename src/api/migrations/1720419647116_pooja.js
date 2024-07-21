module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS pooja(
        id INT AUTO_INCREMENT primary key,
        pooja_name varchar(36) Null,
        image varchar(225) NULL,
        category_id INT NULL,
        message varchar(225) NULL,
        features TEXT NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": `DROP TABLE IF EXISTS pooja`
}