import { url } from '../../constants';

export const getUSer = (user) => {

    return fetch(`${url}/user`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({user:user})
    })
     .then(res =>res.json())
     .then(user=>{
        if(user.length > 0){return user[0]}
        else{throw new Error ('Invalid User')}
     })

};