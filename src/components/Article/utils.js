import { url } from '../../constants';

export const getArticle = (requestedOrder) => {

    return fetch(`${url}/order`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({requestedOrder})
    })
     .then(res =>{return res.json()})

};