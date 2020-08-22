import dotenv from 'dotenv';
import express from 'express';
import errorHandler from './middleware/error-handler';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
import categoriesRouter from './categories/categories-router';
dotenv.config();
const app = express();
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
// the bottom line, literally
export default app;
//# sourceMappingURL=app.js.map