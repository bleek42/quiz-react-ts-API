/* eslint-disable no-console */
import Knex from 'knex';
import app from './app';
import { config } from './config';
const { DATABASE_URL, PORT, NODE_ENV } = config;
const knex = Knex({
    client: 'pg',
    connection: DATABASE_URL,
});
app.set('db', knex);
app.listen(config.PORT, () => console.info(`Server listening in ${NODE_ENV} mode at http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map