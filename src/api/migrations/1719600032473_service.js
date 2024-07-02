module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS service(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(36) NULL,
        email VARCHAR(225) NULL,
        mobile BIGINT(20) NULL,
        event_date DATE NULL,
        guests INT NULL,
        additional_details TEXT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": `DROP TABLE IF EXISTS service`
}
