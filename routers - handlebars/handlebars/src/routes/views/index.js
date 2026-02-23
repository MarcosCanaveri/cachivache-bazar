import { Router } from "express";

const router = Router();

router.get('/vista1', (req, res) => {
    res.render('vista1');
});

export default router;