import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Obtener todos los productos');
});

router.get('/:id', (req, res) => {
    res.send(`Obtener producto con ID: ${id}`);
});

export default router;