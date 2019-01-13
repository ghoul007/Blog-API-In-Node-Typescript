import * as express from'express' ;
const router = express.Router();
import {getAllCategories,saveCategory, getCategoryByID, updateCategory, deleteCategory } from '../controllers/category'
import validId from '../middleware/isValidObjectID'
import  auth from '../middleware/auth'

router.get('/', auth, getAllCategories)
router.post('/', auth,  saveCategory)
router.get('/:id', auth, validId, getCategoryByID)
router.put('/:id', auth, validId,  updateCategory)
router.delete('/:id', auth, validId,  deleteCategory)

export default router;
