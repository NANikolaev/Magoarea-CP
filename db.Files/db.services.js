let config = require('./sql-db');
const sql = require('mssql');

let closedMOStat='20578306';

let getUser= async (regNum)=>{

    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`SELECT Name, LastName, WorkerID, RegisterNumber FROM RM_Workers WHERE RegisterNumber = '${regNum}'`);
        return orders.recordset
    }
    catch (err) { console.log(err) }

}

let getOrders = async (query) => {
 
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`SELECT MONo FROM MA_MO WHERE MONo LIKE '${query}%' AND MOStatus != 20578306`);
        return orders.recordset
    }
    catch (err) { console.log(err) }
};

let getOrder = async (order) => {

    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`SELECT * FROM MGR_v_ControlPlan WHERE MONo = '${order}'`);
        return orders.recordset
    }
    catch (err) { console.log(err) }
};

module.exports = {
    getUser,
    getOrders,
    getOrder,
};