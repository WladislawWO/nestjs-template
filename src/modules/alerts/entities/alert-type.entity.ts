import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cda_alert_type', synchronize: false })
export class AlertType {
  @PrimaryColumn({ name: 'alert_type' })
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ name: 'descr', length: 255 })
  description: string;

  @Column({ name: 'min_value', type: 'float' })
  min: string;

  @Column({ name: 'max_value', type: 'float' })
  max: string;

  @Column({ name: 'default_value', type: 'float' })
  defaultValue: string;
}
