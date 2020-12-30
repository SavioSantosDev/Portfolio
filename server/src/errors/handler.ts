import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError'


interface ValidationErrors {
  [key: string]: string[];
}


const errorHandler: ErrorRequestHandler = (error, request, response, next) => {

  // Erros de validação
  if(  error instanceof ValidationError  ) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      if(err.path)
        errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation fails: ', errors });

  // Entidade não encontrada, nos casos de passar um id não existentet no banco.
  } else if(  error instanceof EntityNotFoundError  ) {
    return response.status(400).json({ message: error });
  }

  console.error(error);

  return response.status(500).json({ message: 'Internal server error' })
};

export default errorHandler;
