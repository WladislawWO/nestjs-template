import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlertsController } from './alerts.controller';
import { AlertsService } from './alerts.service';
import { AlertType } from './entities/alert-type.entity';
import { Alert } from './entities/alert.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alert, AlertType])],
  controllers: [AlertsController],
  providers: [AlertsService],
})
export class AlertsModule {}
