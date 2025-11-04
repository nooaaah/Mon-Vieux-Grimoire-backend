const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');


router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


router.post('/',booksCtrl.createThing);

router.put('/:id',booksCtrl.modifyThing);

router.delete('/:id',booksCtrl.deleteThing);

router.get('/:id',booksCtrl.getOneThing);

router.get('/',booksCtrl.getAllThing );

module.exports = router;