import express from 'express';
import rota from './rotas/index';
import terros from './controller/middleware/error';

const app = express();

app.use(express.json());
app.use('/users', rota.user);
app.use('/login', rota.Login);
app.use(terros);

export default app;
