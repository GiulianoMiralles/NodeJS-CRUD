const { products } = require('../db.json');

module.exports = {
    getProduts: (req, res) => {
        res.json({ 'products': products })
    },
    addProducts: (req, res) => {
        const { marca } = req.body;
        const { tipo } = req.body;
        const { modelo } = req.body;
        const { name } = req.body; // = const products = req.body.name;
        products.push({
            id: products.length,
            marca,
            tipo,
            modelo,
            name
        });
        res.json({
            'success': true,
            'msg': "successfully added"
        });
    },
    updateProduts: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        const { marca } = req.body;
        const { tipo } = req.body;
        const { modelo } = req.body;

        products.forEach((product, i) => {
            if (product.id === Number(id)) {
                product.name = name;
                product.marca = marca;
                product.tipo = tipo;
                product.modelo = modelo;
            }
        });
    res.json({
        'success': true,
        'msg': "updated"
    });
    },
    deleteProducts: (req, res) => {
        const { id } = req.params;

        products.forEach((product, i) => {
            if (product.id === Number(id)) {
                products.splice(i, 1);
            }
        });
        res.json({
            'success': true,
            'msg': "deleted"
        });
    },

};