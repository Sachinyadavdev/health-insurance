export const env = {
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || 'fallback_secret_for_dev_only',
  NODE_ENV: process.env.NODE_ENV || 'development',
};
