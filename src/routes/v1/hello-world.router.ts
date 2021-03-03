import { Router } from 'express';
import { getError, getHelloWorld } from '@controllers/hello-world.controller';

export const getHelloWorldRoutes = () => {
  const router = Router();

  router.get('/', getHelloWorld);
  router.get('/error', getError);

  return router;
};
