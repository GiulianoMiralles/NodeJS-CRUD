const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const productRoutes = require('./routes/products')

//Middlewares
app.use(morgan('dev'));                            //Me devuelve el estado de las peticiones que hago HTTP
app.use(bodyParser.json());                        //Me permite leer formatos Json
app.use(bodyParser.urlencoded({ extended: false })); //Me permite leer los datos de un formulario

//Routes
app.use('/products', productRoutes);


//Static files

//Start server
app.listen(3000, () => {
    console.log('server on port ', 3000);
});