import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import logger from '@utils/logger';
import morganMiddleware from '@config/morganMiddleware';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
//import * as swaggerDocumentVersioning from './swagger.versioning.json';

import { getV1Routes } from '@routes/v1/index';
import Config from '@config/configVars';

const { version, name } = require('../package.json');

/**
 * Depends on where you want to load configuration variables
 * Instanciate Config.loadFromEnvironment or Config.loadFromConfigServer() to load the ones you want
 * Even if you create environment vars e.g Docker ENV Vars they will be loaded
 */
Config.loadFromEnvironment();

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
//app.use(`/express-boiler-plate/swagger-versioning`, swaggerUi.serve, swaggerUi.setup(swaggerDocumentVersioning));

app.listen(parseInt(Config['APP_PORT']));
logger.debug(`${name} version:${version} started at url: ${Config['APP_PORT']}`);
