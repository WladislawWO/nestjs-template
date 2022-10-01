import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AlertType } from './alert-type.entity';

@Entity({ name: 'cda_alerts', synchronize: false })
export class Alert {
  @PrimaryGeneratedColumn({ name: 'alert_id' })
  id: number;

  @Column({ length: 10 })
  partner_id: string;

  @Column({ length: 255 })
  partner_customer_id: string;

  @Column({ length: 10 })
  status: 'active' | 'inactive';

  @Column({ type: 'int' })
  alert_type: number;

  @Column({ type: 'float' })
  threshold: number;

  @ManyToOne(() => AlertType)
  @JoinColumn({ name: 'alert_type' })
  type: AlertType;
}
