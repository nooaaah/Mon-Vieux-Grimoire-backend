const express = require('express');
const auth = require('../middleware/auth');
const booksCtrl = require('../controllers/books');
const multer = require ('../middleware/multer-config');
const router = express.Router();






router.post('/', auth, multer, booksCtrl.createBook);

router.put('/:id', auth, multer,booksCtrl.modifyBook);

router.delete('/:id', auth,booksCtrl.deleteBook);

router.get('/bestrating', booksCtrl.getBestRatedBooks);

router.get('/',booksCtrl.getAllBook );

router.get('/:id',booksCtrl.getOneBook);

router.post('/:id/rating', auth, booksCtrl.rateBook);



module.exports = router;