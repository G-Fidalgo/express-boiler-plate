import { Response } from 'express';
import Logger from '@utils/logger';

interface ErrorResponse {
  httpStatusCode: number;
  message: string;
}

export const errorHandler = (error: HandleError, response: Response) => {
  Logger.error(error.stack);
  const payload: ErrorResponse = {
    httpStatusCode: error.getStatusCode() ? error.getStatusCode() : 500,
    message: error.getMessage() ? error.getMessage() : 'No error message'
  };

  response.status(payload.httpStatusCode).json(payload).end();
};

export class HandleError extends Error {
  private statusCode: number;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.stack;
  }
  public getMessage(): string {
    return this.message;
  }
  public getStatusCode(): number {
    return this.statusCode;
  }

  public getErrorStack(): string | undefined {
    return this.stack;
  }
}
