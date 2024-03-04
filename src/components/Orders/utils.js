import { url } from '../../constants';

export const getOrders = (query) => {

    return fetch(`${url}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({query:query})
    })
     .then(res =>{return res.json()})
     

};

