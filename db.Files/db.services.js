let config = require('./sql-db');
const sql = require('mssql');

let closedMOStat='20578306';
let StubBookNum=`exec usp_UpdStubBookCounter; SELECT LastDocNo FROM MA_StubBookNumbers  WHERE StubBook = '06XX' AND BalanceYear = YEAR(GetDate())`

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
        let header = await pool.request().query(`SELECT * FROM MGR_v_ControlPlan WHERE MONo = '${order}'`);
        let form = await pool.request().query(`SELECT * FROM MGR_v_ControlPlanDetails WHERE MONo = '${order}'`);
        let fullData={ header:header.recordset[0],form:form.recordset}
        return fullData
    }
    catch (err) { console.log(err) }
};

let checkNum =(num)=>{
    let prefixYear=new Date().getFullYear().toString().slice(2,) + '/';
    if(num < 10){return prefixYear+`0000${num}`}
    if(num >= 10 && num < 100){return prefixYear+`000${num}`}
    if(num >= 100 && num < 1000){return prefixYear+`00${num}`}
    if(num >= 1000 && num < 10000){return prefixYear+`0${num}`}
    if(num >= 10000){return prefixYear+`${num}`}
};


let putOrder = async (order) =>{
    let header=order.header
    delete header.MONo
    let form=order.form
    try{
        let pool = await sql.connect(config);
        let lastIndex=await pool.request().query(`SELECT MAX(CPId) [CPId] FROM MGR_ControlPlan`);
        let lastNum=await pool.request().query(StubBookNum);
        let CPId =++lastIndex.recordset[0].CPId
        let currentDocNum=lastNum.recordset[0].LastDocNo
        let CPNo=checkNum(currentDocNum)
        header.CPId=CPId
        header.CPNo=CPNo
        let keys=Array.from(Object.keys(header))
        let values=Array.from(Object.values(header))
        console.log(values)
        let insertHeader= await pool.request().query(`INSERT INTO MGR_ControlPlan (${keys}) VALUES
        (${values[0]}, '${values[1]}', '${values[2]}', '${values[3]}', ${values[4]}, ${values[5]}, '${values[6]}')`)
        console.log(insertHeader)
    }
    catch(err){console.log(err.message)}

  
};

module.exports = {
    getUser,
    getOrders,
    getOrder,
    putOrder,
};