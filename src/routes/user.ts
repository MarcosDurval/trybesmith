import { Router } from 'express';
import 'express-async-errors';
import * as controllerUser from '../controller/user';

const user = Router();

user.post('/', controllerUser.default);

export default user;
