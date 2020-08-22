import dotenv from 'dotenv';
import express, { Application } from 'express';
import Knex from 'knex';
import errorHandler from './middleware/error-handler';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import categoriesRouter from './categories/categories-router';

async () => {
  dotenv.config();

  const app: Application = express();
  const { DATABASE_URL, PORT, NODE_ENV } = config;

  const morganOption = config.NODE_ENV === 'production' ? 'tiny' : 'common';

  // set up middleware
  app.use(morgan(morganOption));
  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.use('/api', categoriesRouter);

  // error handling
  // eslint-disable-next-line no-unused-vars
  app.use(errorHandler);

  const knex = Knex({
    client: 'pg',
    connection: DATABASE_URL,
  });

  app.set('knex', knex);

  app.listen(config.PORT, () =>
    console.info(
      `Server listening in ${NODE_ENV} mode at http://localhost:${PORT}`
    )
  );
};
