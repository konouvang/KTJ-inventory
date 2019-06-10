const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "inventory"`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
    // res.sendStatus(200); // For testing only, can be removed
});

router.post('/', (req, res) => {
    
    console.log('req.body: ', req.body);
    const batch = req.body.batch;
    const name = req.body.name;
    const product_line = req.body.product_line;
    const length = req.body.length;
    const texture = req.body.texture;
    const color = req.body.color;
    const hair_type = req.body.hair_type;
    const region_type = req.body.region_type;
    const factory = req.body.factory;
    const current_location = req.body.current_location;
    const quantity = req.body.quantity;
    const cost_of_batch = req.body.cost_of_batch;
    const price_per_unit = req.body.price_per_unit;
    const photos = req.body.photos;
    const qr_code = req.body.qr_code;
    const queryText = `INSERT INTO "inventory" (
                                                batch,
                                                name,
                                                product_line,
                                                length,
                                                texture,
                                                color,
                                                hair_type,
                                                region_type,
                                                factory,
                                                current_location,
                                                quantity,
                                                cost_of_batch,
                                                price_per_unit,
                                                photos,
                                                qr_code)
                        VALUES (
                            $1,
                            $2,
                            $3,
                            $4,
                            $5,
                            $6,
                            $7,
                            $8,
                            $9,
                            $10,
                            $11,
                            $12,
                            $13,
                            $14,
                            $15
                        ) RETURNING id;`;
    const queryValues = [
        batch,
        name,
        product_line,
        length,
        texture,
        color,
        hair_type,
        region_type,
        factory,
        current_location,
        quantity,
        cost_of_batch,
        price_per_unit,
        photos,
        qr_code
    ];
    console.log('queryValues: ', queryValues);
    pool.query(queryText, queryValues)
        .then((response) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('err',err);
            res.sendStatus(500)
        });
  });

router.put('/:id', (req, res) => {
    console.log('req.body: ', req.body);
    const batch = req.body.batch;
    const name = req.body.name;
    const product_line = req.body.product_line;
    const length = req.body.length;
    const texture = req.body.texture;
    const color = req.body.color;
    const hair_type = req.body.hair_type;
    const region_type = req.body.region_type;
    const factory = req.body.factory;
    const current_location = req.body.current_location;
    const quantity = req.body.quantity;
    const cost_of_batch = req.body.cost_of_batch;
    const price_per_unit = req.body.price_per_unit;
    const photos = req.body.photos;
    const qr_code = req.body.qr_code;
    const queryText = `UPDATE inventory SET batch = $1,
                                            name = $2,
                                            product_line = $3,
                                            length = $4,
                                            texture = $5,
                                            color = $6,
                                            hair_type = $7,
                                            region_type = $8,
                                            factory = $9,
                                            current_location = $10,
                                            quantity = $11,
                                            cost_of_batch = $12,
                                            price_per_unit = $13,
                                            photos = $14,
                                            qr_code = $15
                                            WHERE id = $16;`;                                           
    const queryValues = [
        batch,
        name,
        product_line,
        length,
        texture,
        color,
        hair_type,
        region_type,
        factory,
        current_location,
        quantity,
        cost_of_batch,
        price_per_unit,
        photos,
        qr_code,
        req.params.id
    ];
    console.log('queryValues: ', queryValues);
    pool.query(queryText, queryValues)
        .then((response) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('err',err);
            res.sendStatus(500)
        });

});

router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "inventory" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/inventory', error);
        res.sendStatus(500);
    })
});

module.exports = router;