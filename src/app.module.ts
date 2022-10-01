import { Module } from '@nestjs/common';
import { AlertsModule } from './modules/alerts/alerts.module';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AlertsModule, JwtModule, DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
