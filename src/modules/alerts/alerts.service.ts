import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlertType } from './entities/alert-type.entity';
import { Alert } from './entities/alert.entity';

export class AlertsService {
  constructor(
    @InjectRepository(Alert)
    private alertRepository: Repository<Alert>,
    @InjectRepository(AlertType)
    private alertTypeRepository: Repository<AlertType>,
  ) {}

  findAll() {
    return this.alertRepository.find();
  }

  findAllTypes() {
    return this.alertTypeRepository.find();
  }

  async validateAlerts(alerts) {
    const errors: string[] = [];

    const alertTypesById: object = await this.findAllTypes();

    Object.entries(alerts)
      .slice(2)
      .forEach(([id, value]) => {
        if (value && alertTypesById[id].min && value < alertTypesById[id].min) {
          errors.push(
            `Alerts: ${alertTypesById[id].name} [${id}] can't be less than ${alertTypesById[id].min}`,
          );
        } else if (
          value &&
          alertTypesById[id].max &&
          value > alertTypesById[id].max
        ) {
          errors.push(
            `Alerts: ${alertTypesById[id].name} [${id}] can't be greater than ${alertTypesById[id].max}`,
          );
        }
      });

    return errors;
  }

  saveAlerts(alerts: any, partnerId, newPartnerId) {
    const newAlerts: object[] = [];

    Object.entries(alerts).forEach(([id, value]) => {
      if (value != null) {
        newAlerts.push({
          partner_id: partnerId,
          partner_customer_id: newPartnerId,
          alert_type: id,
          status: 'active',
          threshold: value,
        });
      }
    });

    return this.alertRepository.save(newAlerts);
  }
}
