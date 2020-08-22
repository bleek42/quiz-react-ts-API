"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL,
    TEST_URL: process.env.TEST_URL,
};
exports.default = config;
//# sourceMappingURL=config.js.map