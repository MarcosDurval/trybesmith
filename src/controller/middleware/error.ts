import { ErrorRequestHandler } from 'express';

enum Listerro {
  BadRequest = 400,
  NotFound = 404,
  UnprocessableEntity = 422,
  Unauthorized = 401,
}
const erros:ErrorRequestHandler = (err, _req, res, next) => {
  const type = Listerro[err.code];
  if (type) {
    const status = +type;
    return res.status(status).json({ error: err.message });
  }
  return next(err);
};
export default erros;
