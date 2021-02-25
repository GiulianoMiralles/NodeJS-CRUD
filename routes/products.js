const express = require('express');
const router = express.Router();

/* const controllers = require('../controllers/products');
    .get(controllers.getProduts)
   .post(controllers.addProducts) */

const {getProduts, 
        addProducts,
        updateProduts,
        deleteProducts
} = require('../controllers/products');

router.route('/')
    .get(getProduts)
    .post(addProducts);

router.route('/:id')
    .put(updateProduts)
    .delete(deleteProducts)

module.exports = router;