import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'reflect-metadata';

import logger from '@utils/logger';
import morganMiddleware from '@config/morganMiddleware';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import { getV1Routes } from '@routes/v1/index';

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(morganMiddleware);

app.use(`/express-boiler-plate/v1`, getV1Routes());

app.use(`/express-boiler-plate/swagger`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(parseInt(process.env.APP_PORT!));
logger.debug(`Server started at url: ${process.env.APP_PORT!}`);
