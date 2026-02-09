import express from 'express';
import { userManager } from './managers/user-manager.js'; // Usa { }


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req, res) => {
    try {
        const users = await userManager.getAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userManager.getById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = await userManager.register(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userManager.update(id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userManager.delete(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});