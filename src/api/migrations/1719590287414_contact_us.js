module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS contact_us(
        id INT AUTO_INCREMENT primary key,
        name varchar(36) Null,
        email varchar(225) NULL,
        mobile bigint(20) NULL,
        message text NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": `DROP TABLE IF EXISTS contact_us`
}