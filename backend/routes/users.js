var express = require('express');
var router = express.Router();
const db = require('../hasura/query')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let result = await db.getsalesdata();
  res.json(result);
});

router.get('/hackback', async function (req, res, next) {
  let result = await db.number_of_hachback();
  res.json(result);
});

router.get('/sedan', async function (req, res, next) {
  let result = await db.number_of_sedan();
  res.json(result);
});

router.get('/suv', async function (req, res, next) {
  let result = await db.number_of_suv();
  res.json(result);
});

//

router.get('/mrpsuv', async function (req, res, next) {
  console.log('mrp suv')
  let result = await db.mrpsuv();
  res.json(result);
});

router.get('/mrpsedan', async function (req, res, next) {
  console.log('mrp sedan')
  let result = await db.mrpsedan();
  res.json(result);
});

router.get('/mrphackback', async function (req, res, next) {
  console.log('mrp hatchback')
  let result = await db.mrphackback();
  res.json(result);
});

module.exports = router;
