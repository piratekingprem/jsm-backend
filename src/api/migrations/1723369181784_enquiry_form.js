module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS enquiry_form(
        id INT AUTO_INCREMENT primary key,
        name varchar(36) Null,
        mobile bigint(20) NULL,
        email varchar(225) NULL,
        enquiry_about varchar(36) NULL,
        message text NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
    "down": `DROP TABLE IF EXISTS enquiry_form`
}