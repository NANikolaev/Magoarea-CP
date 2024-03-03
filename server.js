const server=require ("express")();
const PORT = process.env.PORT || 5000;

require('./db.Files/express')(server);
require('./db.Files/routes')(server)


server.listen(PORT,console.log(`Server listening on port ${PORT}`))