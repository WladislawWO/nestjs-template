export interface IConfig {
  PUBLIC_URL: string;
  APP_NAME: string;
  DATABASE_HOST: string;
  DATABASE_PORT: string;
  DATABASE_NAME: string;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;
  ACCESS_JWT_SECRET: string;
  REFRESH_JWT_SECRET: string;
  ENV: string;
  AWS_REGION: string;
}
