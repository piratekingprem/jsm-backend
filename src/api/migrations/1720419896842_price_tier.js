module.exports = {
  up: `CREATE TABLE IF NOT EXISTS price_tier(
        id INT AUTO_INCREMENT primary key,
        pooja_id INT NOT NULL,
        tier_name VARCHAR(50) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        features TEXT NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp ON UPDATE CURRENT_TIMESTAMP
    )`,
  down: `DROP TABLE IF EXISTS price_tier`,
};