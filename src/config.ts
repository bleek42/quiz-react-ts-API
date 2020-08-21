interface Configuration {
  PORT: string | number | null;
  NODE_ENV: string | number | null;
  DATABASE_URL?: string;
  TEST_URL?: string | null;
}

export const config: Configuration = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL,
  TEST_URL: process.env.TEST_URL,
};
