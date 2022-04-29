import express from 'express';
import rota from './routes/index';
import erros from './controller/middleware/error';

const app = express();

app.use(express.json());
app.use('/users', rota.user);
app.use('/login', rota.Login);
app.use('/products', rota.products);
app.use('/orders', rota.orders);
app.use(erros);

export default app;
