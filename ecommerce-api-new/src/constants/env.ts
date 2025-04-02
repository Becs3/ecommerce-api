const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue;

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}


export const DB_HOST = getEnv('DB_HOST');
export const DB_USER = getEnv('DB_USER');
export const DB_PASSWORD = getEnv('DB_PASSWORD');
export const DB_NAME = getEnv('DB_NAME');
export const DB_PORT = parseInt(getEnv('DB_PORT', '3306'), 10);
export const STRIPE_SECRET_KEY = getEnv('SECRET_KEY');
export const ACCESS_TOKEN_SECRET = getEnv('ACCESS_TOKEN_SECRET');
