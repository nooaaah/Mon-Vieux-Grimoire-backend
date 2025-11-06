const express = require('express');
const auth = require('../middleware/auth');
const booksCtrl = require('../controllers/books');
const multer = require ('../middleware/multer-config');
const router = express.Router();



router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


router.post('/', auth, multer, booksCtrl.createBook);

router.put('/:id', auth, multer,booksCtrl.modifyBook);

router.delete('/:id', auth,booksCtrl.deleteBook);

router.get('/:id', auth,booksCtrl.getOneBook);

router.get('/', auth,booksCtrl.getAllBook );

module.exports = router;