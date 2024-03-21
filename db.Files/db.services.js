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
    let form=order.form
    delete header.MONo
    let CPId=0;
    try{
        let pool = await sql.connect(config);
        let lastIndex=await pool.request().query(`SELECT MAX(CPId) [CPId] FROM MGR_ControlPlan`);
        let lastNum=await pool.request().query(StubBookNum);
        let currentDocNum=lastNum.recordset[0].LastDocNo
        let CPNo=checkNum(currentDocNum)
        CPId =++lastIndex.recordset[0].CPId
        header.CPId=CPId;
        header.CPNo=CPNo;
        header.IsImported='1';
        let keys=Array.from(Object.keys(header))
        let values=Array.from(Object.values(header))
        let insertHeader= await pool.request().query(`INSERT INTO MGR_ControlPlan (${keys}) VALUES
        (${values[0]}, '${values[1]}', N'${values[2]}', '${values[3]}', ${values[4]}, ${values[5]}, '${values[6]}', '${values[7]}')`)
        
    }
    catch(err){return err.message}

    try{
        let pool = await sql.connect(config);
        let keys=Array.from(Object.keys(form[0]).slice(3,))
        keys.push('CPId','IsImported')
        form=form.map(x=>`(${x.Line},N'${x.Parameter.replace('\'','')}',N'${x.AnalysisMethod.replace('\'','')}',N'${x.UoM.replace('\'','')}',${x.ExpectedNumResult},'${x.LowerBound.replace('\'','')}','${x.UpperBound.replace('\'','')}','${x.ResultBool}',${x.ResultMeasurement},N'${x.Notes.replace('\'','')}',${CPId},'1')`)
        form.forEach( async (x) => {
              let result=  await pool.request().query(`INSERT INTO MGR_ControlPlanDetails (${keys}) VALUES ${x} `)
        });
        return true
       
    }
    catch (err){return err.message}

};

module.exports = {
    getUser,
    getOrders,
    getOrder,
    putOrder,
};