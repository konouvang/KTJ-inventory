const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log(req.body.imageUrl);
    const imageUrl = req.body.imageUrl;

    const queryText = `INSERT INTO "inventory" ("photos") VALUES ($1) WHERE "id"=$2;`;
    const queryValues = [photos];

    console.log('queryValues: ', queryValues);
    pool.query(queryText, queryValues)
        .then((response) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('imageUrl err',err);
            res.sendStatus(500)
        });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;