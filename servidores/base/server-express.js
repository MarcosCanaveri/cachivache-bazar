import express from 'express';
import { products } from './data.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
    const { value } = req.query;
    if (value) {
        const filteredProducts = products.filter(p => p.price <= parseFloat(value));
        return res.json(filteredProducts);
    }
    return res.json(products);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    return res.json(products);
});

app.post('/', (req, res) => {
    //res.json(products);//
    console.log(req.body);
    const user = {
        ...req.body,
        id:Math.floor(Math.random() * 1000)
    }
    res.status(201).json({message: 'Usuario creado', user});
});

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
}
);