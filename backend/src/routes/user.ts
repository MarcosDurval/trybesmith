import { Router } from 'express';
import 'express-async-errors';
import controllerUser from '../controller/user';

const user = Router();

user.post('/', controllerUser);

export default user;
