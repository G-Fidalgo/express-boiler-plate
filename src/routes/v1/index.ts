import { Router } from 'express';
import { getHelloWorldRoutes } from '@routes/v1/hello-world.router';

export const getV1Routes = () => {
  const router = Router();

  router.use('/hello-world', getHelloWorldRoutes());

  return router;
};
