import { ErrorRequestHandler } from 'express';

enum Listerro {
  BadRequest = 400,
  NotFound = 404,
  UnprocessableEntity = 422,
  Unauthorized = 401,
}
const error:ErrorRequestHandler = (err, _req, res, _next) => {
  const type = Listerro[err.code];
  if (type) {
    const status = +type;
    return res.status(status).json({ error: err.message });
  }
  return res.status(500).json({ error: 'inesperado' });
};
export default error;
