import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import { routes } from './modules/routes';
import { AppError } from './error/AppError';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
//Tratativo de erro criados por nós    
if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }
//Erro do sistema
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
});

app.listen(3333, () => console.log('Servidor subindo na porta 3333'));