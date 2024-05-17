import {Router} from 'express';
import PostController from '../controllers/post.controller.js'

const postController = new PostController();

const router = new Router();
router.post('/post', postController.createPost);
router.get('/post', postController.getPostByUser);

export default router;

