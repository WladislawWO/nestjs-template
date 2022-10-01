import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AlertType } from 'src/modules/alerts/entities/alert-type.entity';
import { Alert } from 'src/modules/alerts/entities/alert.entity';
import { IConfig } from 'src/interfaces/config.interface';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<IConfig>) => {
        const isDev = config.get('ENV') == 'development';

        return {
          type: 'mysql',
          host: config.get('DATABASE_HOST'),
          port: config.get('DATABASE_PORT'),
          username: config.get('DATABASE_USERNAME'),
          password: config.get('DATABASE_PASSWORD'),
          database: config.get('DATABASE_NAME'),
          charset: 'utf8mb4',
          entities: [Alert, AlertType],
          synchronize: isDev,
          logging: isDev,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
