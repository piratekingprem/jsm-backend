module.exports = {
    up: `
        ALTER TABLE product 
            ADD COLUMN category INT DEFAULT NULL
    `,
    down: `
        ALTER TABLE product 
            DROP COLUMN category
    `
};