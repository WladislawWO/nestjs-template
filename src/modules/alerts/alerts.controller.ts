import { Controller, Get, UseGuards } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { JwtAuthGuard, RolesGuard } from 'src/guards';

@Controller('alerts')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get()
  findAll() {
    return this.alertsService.findAll();
  }

  @Get('types')
  findAllTypes() {
    return this.alertsService.findAllTypes();
  }
}
