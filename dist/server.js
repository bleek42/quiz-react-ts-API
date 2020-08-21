/* eslint-disable no-console */
import Knex from 'knex';
import app from './app';
import { config } from './config';
const knex = Knex({
  client: 'pg',
  connection: config.DATABASE_URL,
});
app.set('db', knex);
app.listen(config.PORT, () =>
  console.info(
    `Server listening in ${config.NODE_ENV} mode at http://localhost:${config.PORT}`
  )
);
//# sourceMappingURL=server.js.map
