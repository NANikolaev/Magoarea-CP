let router = require('express').Router();
let services = require('./db.services');

router.route('/user')

  .post((req, res) => {
    let regNum = req.body.user
    services.getUser(regNum)
      .then(user => res.json(user))
      .catch(err => console.log(err))
  })


router.route('/orders')

  .post((req, res) => {
    let query = req.body.query;
    services.getOrders(query)
      .then(orders => res.json(orders))
      .catch(err => console.log(err))
  });

router.route('/order')

  .post((req, res) => {
    let id = req.body.requestedOrder
    services.getOrder(id)
      .then(order =>res.json(order))
      .catch(err => console.log(err))
  })

  .put((req, res) => {
    let order=req.body.order
    services.putOrder(order)
    .then(isFine=>{
      if(isFine != true){res.send(isFine)}
      else{res.send(true)}
    })
   
  })

module.exports = (server) => {
  server.use(router)
}