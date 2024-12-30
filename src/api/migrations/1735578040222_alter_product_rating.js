module.exports = {
    up: `
        ALTER TABLE product 
            ADD COLUMN rating INT DEFAULT 4
    `,
    down: `
        ALTER TABLE product 
            DROP COLUMN rating
    `
};
