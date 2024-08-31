module.exports = {
    up: `ALTER TABLE product ADD discount INT NULL`,
    down: `ALTER TABLE product DROP COLUMN discount`
};