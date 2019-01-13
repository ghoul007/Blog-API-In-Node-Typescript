import * as express from 'express';
import { getAllPosts, getPostByID, createPost, updatePost, deletePost } from '../controllers/post'
const router = express.Router();
import auth from '../middleware/auth'
import validID from '../middleware/isValidObjectID'

router.get('/', getAllPosts)
router.get('/:id', validID, getPostByID)
router.post('/', auth, createPost)
router.put('/:id', auth, validID, updatePost)
router.delete('/:id', auth, validID, deletePost)


export default router;