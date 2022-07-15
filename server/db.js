const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:"marketiq",
    host:"localhost",
    port:5432,
    database:"mini_erp"
})
module.exports = pool