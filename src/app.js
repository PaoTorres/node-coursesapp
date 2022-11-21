const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error.middleware");
const initModels = require('./models/initModels');

const app= express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
 .then(()=>console.log("******* AUTENTICACIÓN a BD exitosa *******"))
 .catch((error)=>console.log(error));

 db.sync({force: true})
 .then(()=>console.log("******* SINCRONIZACIÓN de la BD exitosa ******* "))
 .catch((error)=>console.log(`******Mi middleware de error:******** ${error}`));

 app.get('/', (req, res)=>{
    console.log("Bienvenido al servidor");
});

 app.use(handleError);
 
 module.exports = app;
