import express from 'express';
import cors from 'cors'
import swaggerUI from 'swagger-ui-express';
import doc from './swagger.json';
import rota from './routes/index';
import erros from './controller/middleware/error';

const app = express();
app.use(cors())
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(doc));
app.use('/users', rota.user);
app.use('/login', rota.Login);
app.use('/products', rota.products);
app.use('/orders', rota.orders);
app.use(erros);

export default app;
