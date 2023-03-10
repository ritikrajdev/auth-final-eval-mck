export const PORT = process.env.PORT ?? 4000;
export const REDIST_HOST =
  process.env.REDIS_HOST ?? 'localhost';
export const REDIS_PORT = process.env.REDIS_PORT ?? 6379;
export const CORS_ORIGIN = process.env.CORS_ORIGIN ?? '*';
export const JWT_SECRET =
  process.env.JWT_SECRET ?? 'some-random-secret';
export const EXPIRATION_TIME_IN_SECONDS = 2 * 24 * 60 * 60;
