"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const knex_1 = tslib_1.__importDefault(require("knex"));
const error_handler_1 = tslib_1.__importDefault(require("./middleware/error-handler"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const config_1 = tslib_1.__importDefault(require("./config"));
const categories_router_1 = tslib_1.__importDefault(require("./categories/categories-router"));
async () => {
    dotenv_1.default.config();
    const app = express_1.default();
    const { DATABASE_URL, PORT, NODE_ENV } = config_1.default;
    const morganOption = config_1.default.NODE_ENV === 'production' ? 'tiny' : 'common';
    // set up middleware
    app.use(morgan_1.default(morganOption));
    app.use(helmet_1.default());
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use('/api', categories_router_1.default);
    // error handling
    // eslint-disable-next-line no-unused-vars
    app.use(error_handler_1.default);
    const knex = knex_1.default({
        client: 'pg',
        connection: DATABASE_URL,
    });
    app.set('knex', knex);
    app.listen(config_1.default.PORT, () => console.info(`Server listening in ${NODE_ENV} mode at http://localhost:${PORT}`));
};
// the bottom line, literally
exports.default = app;
//# sourceMappingURL=server.js.map