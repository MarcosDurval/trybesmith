import { Router } from 'express';
import 'express-async-errors';
import controllerLogin from '../controller/login';

const Login = Router();

Login.post('/', controllerLogin);

export default Login;