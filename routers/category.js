const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/category')
const validId = require('../middleware/isValidObjectID')
const auth = require('../middleware/auth')

router.get('/', auth, categoryCtrl.getAllCategories)
router.post('/', auth, categoryCtrl.saveCategory)
router.get('/:id', auth, validId, categoryCtrl.getCategoryByID)
router.put('/:id', auth, validId, categoryCtrl.updateCategory)
router.delete('/:id', auth, validId, categoryCtrl.deleteCategory)

module.exports = router;
