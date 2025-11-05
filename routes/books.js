const express = require('express');
const auth = require('auth');
const booksCtrl = require('../controllers/books');
const router = express.Router();



router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


router.post('/', auth, booksCtrl.createThing);

router.put('/:id, auth',booksCtrl.modifyThing);

router.delete('/:id', auth,booksCtrl.deleteThing);

router.get('/:id', auth,booksCtrl.getOneThing);

router.get('/', auth,booksCtrl.getAllThing );

module.exports = router;