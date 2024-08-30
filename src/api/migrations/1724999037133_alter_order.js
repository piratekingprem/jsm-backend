module.exports = {
    up: `ALTER TABLE orders_product ADD quantity INT NULL`,
    down: `ALTER TABLE orders_product DROP COLUMN quantity`
};