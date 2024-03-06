let config = require('./sql-db');
const sql = require('mssql');

let getUser= async (userId)=>{

    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`SELECT WorkerID, Name, LastName FROM RM_Workers WHERE WorkerID = ${userId}`);
        return orders.recordset
    }
    catch (err) { console.log(err) }

}

let getOrders = async (query) => {

    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`SELECT Name, LastName FROM RM_Workers WHERE WorkerID LIKE '${query}%'`);
        return orders.recordset
    }
    catch (err) { console.log(err) }
};

let getOrder = async (query) => {

    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`SELECT * FROM RM_Workers WHERE WorkerID = ${query}`);
        return orders.recordset
    }
    catch (err) { console.log(err) }
};

module.exports = {
    getUser,
    getOrders,
    getOrder,
};