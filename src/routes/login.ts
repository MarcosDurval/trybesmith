import { Router } from 'express';
import 'express-async-errors';
import * as controllerLogin from '../controller/login';

const Login = Router();

Login.post('/', controllerLogin.default);

export default Login;