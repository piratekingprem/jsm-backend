module.exports = {
    up: `
        ALTER TABLE product 
            ADD discount INT NULL,
            ADD COLUMN sale_price INT NULL
    `,
    down: `
        ALTER TABLE product 
            DROP COLUMN discount, 
            DROP COLUMN sale_price
    `
};
