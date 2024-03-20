import { url } from '../../constants';

export const getArticle = (requestedOrder) => {

    return fetch(`${url}/order`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({ requestedOrder })
    })
      .then(res =>res.json())
      .then(res=>{
        if(res.form.length == 0){throw new Error ('Invalid Request')}
        return res
      })

};

export const putArticle=(order)=>{

     
    return fetch(`${url}/order`, {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({order})
    })
     .then(res =>res.json())
     .then(res=>{
         if(res){return res}
         else{throw new Error ('Invalid Request')}
     })

}

export const check = (e, i, setOrder) => {
    if (e.target.checked) {
        setOrder(order => {
            let newOrder=order
            newOrder.form[i].ResultBool='1'
            return newOrder
        })
    }
    if (!e.target.checked) {
        setOrder(order => {
            let newOrder=order
            newOrder.form[i].ResultBool='0'
            return newOrder
        })
    }
}

export const addValue=(e,i,setOrder)=>{
    setOrder(order => {
        let newOrder = order
        newOrder.form[i].ResultMeasurement= +e.target.value
        return newOrder
    })

}