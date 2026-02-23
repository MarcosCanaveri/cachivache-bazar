import { Router } from 'express';
import productRouter from './product-router.js';
import userRouter from './user-router.js';
import cartRouter from './cart-router.js';
import viewsRouter from '../views/index.js';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/carts', cartRouter);
router.use('/', viewsRouter);

export default router;