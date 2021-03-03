import { Request, Response } from 'express';
import logger from '@utils/logger';
import { errorHandler, HandleError } from '@utils/error-handler';

export const getHelloWorld = (request: Request, response: Response) => {
  logger.debug('Trying to get Hello World response');
  response.status(200).json({ response: 'hello world' });
};

export const getError = (request: Request, response: Response) => {
  logger.debug('Trying to get a new Error and test if it is handled correctly');

  try {
    throw new HandleError('Error Handled with my new Error Handler', 404);
  } catch (error) {
    errorHandler(error, response);
  }
};
