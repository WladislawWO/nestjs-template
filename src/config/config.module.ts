import { Module } from '@nestjs/common';
import { ConfigModule as Config } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    Config.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`
        : '.env',
      validationSchema: Joi.object({
        ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        AWS_ACCESS_KEY_ID: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
        DATABASE_PARTNER_SERVICE: Joi.string().required(),
        APP_NAME: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.string().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        ACCESS_JWT_SECRET: Joi.string().required(),
        REFRESH_JWT_SECRET: Joi.string().required(),
        MAIL_HOST: Joi.string().required(),
        MAIL_USER: Joi.string().required(),
        MAIL_PASSWORD: Joi.string().required(),
        MAIL_FROM: Joi.string().required(),
        MAIL_PORT: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigModule {}
